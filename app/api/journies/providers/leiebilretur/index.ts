import { Journey } from "@/types";
import sha256 from "crypto-js/sha256";
import { LeibilreturJourney } from "./types";
import { parseISO } from "date-fns";

export default async function getJournies(): Promise<Journey[]> {
  const req = await fetch("https://leiebilretur.no/headless/jobs/");
  const apiResponse = await req.json();
  const journies = transform(apiResponse);
  return journies;
}

const transform = (journies: LeibilreturJourney[]): Journey[] => 
    journies.map(j => (
        {
            id: sha256(JSON.stringify(j)).toString(),
            provider: "Leiebilretur",
            availableFrom: parseISO(j.availableForPickup),
            carDescription: j.regNumber,
            pickupPoint: {
                name: j.pickupFrom.name.toLocaleLowerCase(),
                addressLine: j.pickupFrom.line1,
                postalPlace: j.pickupFrom.city,
                postalCode: j.pickupFrom.postCode,
            },
            returnPoint: {
                name: j.deliverTo.name.toLocaleLowerCase(),
                addressLine: j.deliverTo.line1,
                postalPlace: j.deliverTo.city,
                postalCode: j.deliverTo.postCode,
            }
    }), []);
