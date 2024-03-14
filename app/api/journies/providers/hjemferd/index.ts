import { Journey } from '@/types';
const cheerio = require('cheerio');
import sha256 from 'crypto-js/sha256';


export default async function getJournies(): Promise<Journey[]>{
    const req = await fetch("https://hjemferd.no/index.php?page=order");
    const journies = await scrapeItems(req);
    return journies;
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
            availableFrom: startDate,
            availableTo: pickupBy,
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