import { Location } from "@/types/Location";
import { createContext, ReactNode, useContext, useState } from "react";

type LocationContextType = {
    ipLocation: Location | null,
    setIpLocation: (newLocation: Location | null) => void
    hasSearched: boolean
    setHasSearched: (searched: boolean) => void
    isLoading: boolean
    setIsLoading: (newBoolean: boolean) => void
}

export const LocationContext = createContext<LocationContextType | null>(null)

export const LocationProvider = ({ children }: { children: ReactNode }) => {
    const [ipLocation, setIpLocation] = useState<Location | null>(null)
    const [hasSearched, setHasSearched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LocationContext.Provider value={
            {
                ipLocation,
                setIpLocation,
                hasSearched,
                setHasSearched,
                isLoading,
                setIsLoading
            }
        }>{children}</LocationContext.Provider>
    )
}

export const useLocation = () => useContext(LocationContext)