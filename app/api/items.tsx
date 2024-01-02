"use server";
import { load } from 'cheerio'
import axios from 'axios'


interface ApiResponse {
    fromTitle: string,
    toTitle: string,
    fromDate: string,
    toDate: string,
    description: string,
    link: string
}


export async function getItems(): Promise<ApiResponse[]>{

    const items: ApiResponse[] = [];

    const { data, status } = await axios.get('https://www.hertzfreerider.no/unauth/list_transport_offer.aspx');
    if(status === 200){
        const $ = load(data);
        /*@ts-ignore*/
        await $('#ctl00_ContentPlaceHolder1_Display_transport_offer_advanced1_DataList1 tr.highlight').each((index, element) => {

            const fromTitle = $(element).find('span.offer_header a').first().text();
            const toTitle = $(element).find('span.offer_header a').last().text();
    
            const descColumn = $(element).next();
    
            const fromDate = $(descColumn).find('span[id*="offerDate"]').text();
            const toDate = $(descColumn).find('span[id*="Label1"]').text();
            const description = $(descColumn).find('span[id*="offerDescription1"]').text();
    
            items.push({
                fromTitle,
                toTitle,
                fromDate,
                toDate,
                description,
                link: 'https://www.hertzfreerider.no/unauth/list_transport_offer.aspx'
            });
          });     
    }
    return items;
}