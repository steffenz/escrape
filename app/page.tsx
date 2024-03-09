import SettingsPanel from "@/components/settings/SettingsPanel";
import JourniesList from "@/components/journey/JourniesList";
import { Journey } from "@/types";

export default async function Home() {

  const req = await fetch('http://localhost:3000/api/journies');
  const journies: Journey[] = await req.json();
  

  return (
   <main className="container mx-auto">

    <header className="mt-10 mb-10">
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Alle reiser</h1>
    </header>
    <SettingsPanel/>
    <JourniesList journies={journies}/>
   </main>
  )
}
