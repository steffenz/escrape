"use client";
import { Journey } from "@/types";
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPinIcon, EyeOffIcon, EyeIcon, ClockIcon,RouteIcon, RouteOffIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { format } from "date-fns";


interface Props {
  journey: Journey;
}




export default function SingleJourney({ journey }: Props){

  // const ls = (typeof window !== undefined) ? localStorage : undefined;

  // const isCurrentlyHidden = (): boolean => {
  //   const array: [string] = JSON.parse(ls?.getItem('hiddenJournies') ?? "[]");
  //   const index = array.indexOf(journey.id);
  //   return index !== -1;
  // }

  const [isHidden, setIsHidden ] = useState<boolean>(false);



  // const toggleItem = () => {
  //   const array: [string] = JSON.parse(ls?.getItem('hiddenJournies') ?? "[]");
  //   const index = array.indexOf(journey.id);
  //   if(index !== -1){ 
  //     array.splice(index, 1)
  //     setIsHidden(false);
  //   } 
  //   else { 
  //     array.push(journey.id)
  //     setIsHidden(true);
  //   }
  //   localStorage.setItem('hiddenJournies', JSON.stringify(array));
  // }



    return(
      <Card className={isHidden ? 'hiddenItem' :''}>
        <CardHeader>
        </CardHeader>
        <CardContent>

        <span className="flex items-center">
          <RouteIcon size="16" className="mr-2"/> 
          <span className="capitalize">{journey.pickupPoint.name }</span>
        </span>
        <span className="flex items-center">
          <RouteOffIcon size="16" className="mr-2"/>
          <span className="capitalize">{journey.returnPoint.name }</span>
        </span>
        { journey.availableFrom && 
        <span className="flex items-center">
          <ClockIcon size="16" className="mr-2"/>
          <span>{format(journey.availableFrom, "dd.MM.yyyy")}</span>
          { journey.availableTo && <span className="mx-2"> - { format(journey.availableTo, "dd.MM.yyyy")}</span>}
        </span>
        }
        </CardContent>
        <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link target="_blank" href={journey.bookingUrl ? journey.bookingUrl : ""}>
            <ExternalLink className="mr-2 h-4 w-4" />Book via { journey.provider}</Link>
          </Button>
          {/* <Button variant="outline" onClick={toggleItem}>
            { isHidden ? <><EyeIcon className="mr-2 h-4 w-4" />Vis</> : <><EyeOffIcon className="mr-2 h-4 w-4" />Skjul</> }
            
          </Button> */}
        </div>
        </CardFooter>
      </Card>
    )
}