import { Journey } from '@/types';
const cheerio = require('cheerio');
import sha256 from 'crypto-js/sha256';
import { parse } from 'date-fns';


export default async function getJournies(): Promise<Journey[]>{
    const req = await fetch("https://hjemferd.no/index.php?page=order");
    const journies = await scrapeItems(req);
    return journies;
}

const parseDate = (date: string): Date => {
    // Sometimes they mess up the date with tabs and specific hours we don't need atm.
    const dateRegex = /\b\d{1,2}\.\d{1,2}\.\d{4}\b/;
    const dateMatch = date.match(dateRegex);
    const cleanedDate = dateMatch ? dateMatch[0] : "";
    return parse(cleanedDate, 'dd.MM.yyyy', new Date());
}


const scrapeItems = async (response: Response) => {
    const html = await response.text();
    const $ = cheerio.load(html);
    const rawJournies = $('div.portfolio-single');
    const journies: Journey[] = []

    rawJournies.each((index: number, element: any) => {
        const header = $(element).find('.order-header').text()?.split('-');
        const startDate = $(element).find('.text-right.strdate').text().replace(/\s{2,}/g, ' ');
        const pickupBy = $(element).find('b:contains("Må hentes før")').parent().parent().find('div:last-child').text().replace(/\s{2,}/g, ' ');
        journies.push({
            id: sha256(JSON.stringify([header, startDate, pickupBy])).toString(),
            provider: "Hjemferd",
            availableFrom: parseDate(startDate),
            availableTo: parseDate(pickupBy),
            carDescription: "",
            pickupPoint: {
                name: header[0]?.toLocaleLowerCase(),
            },
            returnPoint: {
                name: header[1]?.toLocaleLowerCase(),
            }
        }
    )}); 

    return journies;
}