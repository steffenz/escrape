import SettingsPanel from "@/components/settings/SettingsPanel";
import JourniesList from "@/components/journey/JourniesList";
import getJournies from "./api/journies/providers";
import Link from "next/link";

export default async function Home() {
  const journies = await getJournies();
  return (
    <>
    <main className="container mx-auto">
      <header className="mt-10 mb-10 flex justify-between">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Returbiler tilgjengelig 
        </h1>
        <SettingsPanel />
      </header>
      
      <JourniesList journies={journies} />
    </main>
    <footer className="container mx-auto pt-20 pb-20 text-center text-gray-400 text-sm">Denne siden er bare ment som et overblikk. Dobbeltsjekk alltid hos de faktiske leverandørene og leiebilselskapene.<br/>Forslag til tips og endringer mottas med takk - gjerne som en pull request på <Link className="underline" target="_blank" href="https://github.com/steffenz/escrape">GitHub.</Link><br/>Kjør forsiktig!</footer>
    </>
  );
}
