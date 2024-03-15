
import { Journey } from '@/types';
import { CarRental } from './types';
import sha256 from 'crypto-js/sha256';
import { parseISO } from 'date-fns';
import { getRevalidationInterval } from '@/lib/utils';

const baseBookingUrl = 'https://www.hertzfreerider.no/no-no/';

export default async function getJournies(): Promise<Journey[]>{
    const req = await fetch("https://www.hertzfreerider.no/api/transport-routes/?country=NORWAY", { next: { revalidate: getRevalidationInterval() } });
    const apiResponse = await req.json();
    const journies = transform(apiResponse);
    return journies;
}

const transform = (journies: CarRental[]): Journey[] => 
    journies.map(j => (
        {
            id: sha256(JSON.stringify(j)).toString(),
            provider: "Hertz",
            bookingUrl: baseBookingUrl,
            availableFrom: parseISO(j.routes[0].availableAt),
            availableTo: parseISO(j.routes[0].latestReturn),
            carDescription: j.routes[0].carModel,
            pickupPoint: {
                name: j.pickupLocationName.toLocaleLowerCase(),
                addressLine: j.routes[0].pickupLocation.address,
                postalPlace: j.routes[0].pickupLocation.city,
                phone: j.routes[0].pickupLocation.phoneNumber,
                email: j.routes[0].pickupLocation.emailAddress,
            },
            returnPoint: {
                name: j.returnLocationName.toLocaleLowerCase(),
                addressLine: j.routes[0].returnLocation.address,
                postalPlace: j.routes[0].returnLocation.city,
                phone: j.routes[0].returnLocation.phoneNumber,
                email: j.routes[0].returnLocation.emailAddress,
        },
    }), []);