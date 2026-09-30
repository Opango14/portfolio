import { ArchitectureConsole } from "../components/home/ArchitectureConsole";
import { HomeHero } from "../components/home/HomeHero";
import { OpanodePerspective } from "../components/home/OpanodePerspective";

export function Home() {
  return (
    <>
      <HomeHero />
      <ArchitectureConsole />
      <OpanodePerspective />
    </>
  );
}
