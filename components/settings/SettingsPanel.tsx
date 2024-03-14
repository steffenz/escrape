
"use client";
import { useSettings } from "../context/SettingsContext";
import { Button } from "../ui/button";

 

export default function SettingsPanel(){

    const { showHidden, setShowHidden} = useSettings();

    return(
    <>
        <Button onClick={() => setShowHidden(!showHidden)}>{ showHidden ? 'Ikke vis skjulte': 'Vis skjulte'}</Button>
    </>
    )
}