import { useState } from "react"
import { Button } from "../ui/button";

interface Filter {
    key: string,
    value: string,
    operator: string
}

export default function FilterBuilder(){

    const [ filters, setFilters ] = useState<Filter[]>();

    return(
        <div>
            <h2>Filter</h2>
            <Button>Nytt filter</Button>
            <input type="text" placeholder="Bop"/>
        </div>
    )
}