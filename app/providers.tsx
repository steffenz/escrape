'use client'

import { SettingsProvider } from "@/components/context/SettingsContext"
import { ReactNode} from "react"
// export default function RootLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   })

export default function Providers({children }: {children: React.ReactNode}) {
    return(
    <SettingsProvider>
        {children}
    </SettingsProvider>
    );
}