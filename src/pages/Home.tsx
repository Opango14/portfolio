import { ArchitectureConsole } from "../components/home/ArchitectureConsole";
import { HomeCTA } from "../components/home/HomeCTA";
import { HomeHero } from "../components/home/HomeHero";
import { OpanodePerspective } from "../components/home/OpanodePerspective";

export function Home() {
  return (
    <>
      <HomeHero />
      <ArchitectureConsole />
      <OpanodePerspective />
      <HomeCTA />
    </>
  );
}
