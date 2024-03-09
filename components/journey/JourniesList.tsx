'use client';
import { Journey } from "@/types";
import SingleJourney from "./SingleJourney";
import { useSettings } from "../context/SettingsContext";

interface Props {
    journies: Journey[];
}

export default function JourniesList({ journies }: Props){

    const { showHidden } = useSettings();

    return(
        <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 ${!showHidden ? 'no-hidden' : ''}`}>
        { journies.map((journey) => 
            <SingleJourney key={journey.id} journey={journey}/>
        )}
    </div>
    )
}