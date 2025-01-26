"use client";

import { LocationProvider } from "@/contexts/LocationContext";
import { Infos } from "@/components/Infos";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map").then((mod) => mod.Map), { 
  ssr: false
});

export default function Home() {
  return (
    <LocationProvider>
        <Infos />
        <DynamicMap />
    </LocationProvider>
  );
}
