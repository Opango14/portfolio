import { ArchitectureConsole } from "../components/home/ArchitectureConsole";
import { CareerSnapshot } from "../components/home/CareerSnapshot";
import { EngineeringPillars } from "../components/home/EngineeringPillars";
import { HomeCTA } from "../components/home/HomeCTA";
import { HomeHero } from "../components/home/HomeHero";
import { OpanodePerspective } from "../components/home/OpanodePerspective";

export function Home() {
  return (
    <>
      <HomeHero />
      <ArchitectureConsole />
      <EngineeringPillars />
      <OpanodePerspective />
      <CareerSnapshot />
      <HomeCTA />
    </>
  );
}
