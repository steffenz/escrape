'use client';
import { useContext, createContext, useState, Context } from "react";

interface SettingsContext {
    showHidden: boolean,
    setShowHidden: (v: boolean) => void,
}

/* @to-do: get this from localState */
export const initialSettings: SettingsContext = {
    showHidden: false,
    setShowHidden(v) {},
}

const SettingsContext = createContext<SettingsContext>(initialSettings);


export function useSettings(){
    return useContext(SettingsContext);
}


export function SettingsProvider({ children }: any){
    const [ showHidden, setShowHidden ] = useState<boolean>(false);

    return(
        <SettingsContext.Provider value={{showHidden, setShowHidden, }}>
            {children}
        </SettingsContext.Provider>
    )
}