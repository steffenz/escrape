"use client";
import { Journey } from "@/types";
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPinIcon, EyeOffIcon, EyeIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";


interface Props {
  journey: Journey;
}




export default function SingleJourney({ journey }: Props){

  const ls = (typeof window !== undefined) ? localStorage : undefined;

  const isCurrentlyHidden = (): boolean => {
    const array: [string] = JSON.parse(ls?.getItem('hiddenJournies') ?? "[]");
    const index = array.indexOf(journey.id);
    return index !== -1;
  }

  const [isHidden, setIsHidden ] = useState<boolean>(isCurrentlyHidden());


  const { showHidden } = useSettings();

  const getClasses = {}


  const toggleItem = () => {
    const array: [string] = JSON.parse(ls?.getItem('hiddenJournies') ?? "[]");
    const index = array.indexOf(journey.id);
    if(index !== -1){ 
      array.splice(index, 1)
      setIsHidden(false);
    } 
    else { 
      array.push(journey.id)
      setIsHidden(true);
    }
    localStorage.setItem('hiddenJournies', JSON.stringify(array));
  }



    return(
      <Card className={isHidden ? 'hiddenItem' :''}>
        <CardHeader>
          {/* <CardTitle>Card Title</CardTitle> */}
          {/* <CardDescription>Gratisreis</CardDescription> */}
        </CardHeader>
        <CardContent>

        <span className="flex items-center">
          <MapPinIcon size="16" className="mr-2"/> { journey.pickupPoint.name }
        </span>
        <span className="flex items-center">
          <MapPinIcon size="16" className="mr-2"/> { journey.returnPoint.name }
        </span>
          <p>{journey.availableFrom} - { journey.availableTo } </p>
          
        </CardContent>
        <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link target="_blank" href="https://www.hertzfreerider.no/unauth/list_transport_offer.aspx">
            <ExternalLink className="mr-2 h-4 w-4" />Book via { journey.provider}</Link>
          </Button>
          <Button variant="outline" onClick={toggleItem}>
            { isHidden ? <><EyeIcon className="mr-2 h-4 w-4" />Vis</> : <><EyeOffIcon className="mr-2 h-4 w-4" />Skjul</> }
            
          </Button>
        </div>
        </CardFooter>
      </Card>
    )
}