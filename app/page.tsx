import SettingsPanel from "@/components/settings/SettingsPanel";
import JourniesList from "@/components/journey/JourniesList";
import getJournies from "./api/journies/providers";

export default async function Home() {
  const journies = await getJournies();
  return (
    <main className="container mx-auto">
      <header className="mt-10 mb-10">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Alle reiser
        </h1>
      </header>
      <SettingsPanel />
      <JourniesList journies={journies} />
    </main>
  );
}
