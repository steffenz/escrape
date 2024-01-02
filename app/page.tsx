"use client";
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, MapPinIcon, EyeOffIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Home() {
  const cars = [
    {
      fromTitle: 'Rørvik Lufthavn',
      toTitle: 'Trondheim',
      fromDate: '2023-12-15',
      toDate: '2023-12-21',
      description: 'EF 55331 // VW ID.3 5D 58KWH 5D AUT ELECTR'
    },
    {
      fromTitle: 'Rørvik',
      toTitle: 'Trondheim',
      fromDate: '2023-12-13',
      toDate: '2023-12-18',
      description: 'TOYOTA PROACE 8-SETER AUT TDI'
    },
    {
      fromTitle: 'Namsos DT',
      toTitle: 'Trondheim',
      fromDate: '2023-12-12',
      toDate: '2023-12-18',
      description: 'TOYOTA YARIS CR 5D AUT 4X4 HYB'
    },
    {
      fromTitle: 'Bergen Lufthavn',
      toTitle: 'Kristiansand',
      fromDate: '2023-12-13',
      toDate: '2023-12-16',
      description: 'TOYOTA PROACE'
    },
    {
      fromTitle: 'Trondheim Værnes Flyplass',
      toTitle: 'Kristiansund Lufthavn',
      fromDate: '2023-12-13',
      toDate: '2023-12-18',
      description: ''
    },
    {
      fromTitle: 'Bergen Lufthavn',
      toTitle: 'Stavanger Flyplass',
      fromDate: '2023-12-14',
      toDate: '2023-12-16',
      description: 'TOYOTA PROACE'
    }
  ]

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
   <main className="container mx-auto">

    <header className="mt-10 mb-10">
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Alle biler</h1>

      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Kilder <ChevronDown className="ml-1"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Formidlere</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Hertz FreeRider
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Leiebilretur
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Hjemferd
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
      
    </DropdownMenu>

    </header>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      { cars.map((car, i) => 
      <Card key={i}>
         <CardHeader>
           {/* <CardTitle>Card Title</CardTitle> */}
           {/* <CardDescription>Gratisreis</CardDescription> */}
         </CardHeader>
         <CardContent>

          <span className="flex items-center">
            <MapPinIcon size="16" className="mr-2"/> { car.fromTitle }
          </span>
          <span className="flex items-center">
            <MapPinIcon size="16" className="mr-2"/> { car.toTitle }
          </span>
           <p>{car.fromDate} - { car.toDate } </p>
           
         </CardContent>
         <CardFooter>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link target="_blank" href="https://www.hertzfreerider.no/unauth/list_transport_offer.aspx">
              <ExternalLink className="mr-2 h-4 w-4" />Book via Hertz</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link target="_blank" href="https://www.hertzfreerider.no/unauth/list_transport_offer.aspx">
              <EyeOffIcon className="mr-2 h-4 w-4" />Skjul</Link>
            </Button>
          </div>
         </CardFooter>
       </Card>
      )}
    </div>
   </main>
  )
}
