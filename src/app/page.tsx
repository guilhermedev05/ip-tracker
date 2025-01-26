"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import axios from "axios"
import { Location } from "@/types/Location";
import { InputIp } from "@/components/InputIp";
import { MapInfo } from "@/components/MapInfo";
import { Map } from "@/components/Map";
import { LocationProvider } from "@/contexts/LocationContext";
import { Infos } from "@/components/Infos";

export default function Home() {

  return (
    <LocationProvider>
      <div>
        <Infos />
        <Map />
      </div>
    </LocationProvider>
  );
}
