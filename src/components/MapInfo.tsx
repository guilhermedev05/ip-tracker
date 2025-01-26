import { useLocation } from "@/contexts/LocationContext"
import { useState } from "react"
import { Spinner } from "./Spinner"

export const MapInfo = () => {
    const locationCtx = useLocation()
    
    return (
        <>
            {locationCtx?.ipLocation && !locationCtx.isLoading &&
                <div className="flex flex-col font-['rubik'] md:flex-row bg-white w-full max-w-[267px] md:w-[80%] md:mx-auto md:max-w-5xl md:justify-center py-5 text-center rounded-lg mt-5 absolute top-[45%] md:top-[70%] z-50 md:shadow-md">
                    <div className="flex-1 border-r border-r-gray-400 md:text-left md:px-5 mb-2.5 md:mb-0 md:gap-0">
                        <h3 className="text-gray-400 uppercase text-xs font-bold mb-1.5 tracking-widest">IP Address</h3>
                        <p className="text-gray-700 font-bold">{locationCtx?.ipLocation.ip}</p>
                    </div>
                    <div className="flex-1 border-r border-r-gray-400 md:text-left md:px-5 mb-2.5 md:mb-0">
                        <h3 className="text-gray-400 uppercase text-xs font-bold mb-1.5 tracking-widest">Location</h3>
                        <p className="text-gray-700 font-bold">{`${locationCtx?.ipLocation.location.city}, ${locationCtx?.ipLocation.location.region}`}</p>
                    </div>
                    <div className="flex-1 border-r border-r-gray-400 md:text-left md:px-5 mb-2.5 md:mb-0">
                        <h3 className="text-gray-400 uppercase text-xs font-bold mb-1.5 tracking-widest">Timezone</h3>
                        <p className="text-gray-700 font-bold">{locationCtx?.ipLocation.location.timezone}</p>
                    </div>
                    <div className="flex-1 md:text-left md:px-5">
                        <h3 className="text-gray-400 uppercase text-xs font-bold mb-1.5 tracking-widest">Isp</h3>
                        <p className="text-gray-700 font-bold">{`${locationCtx?.ipLocation.isp.trim() != '' ? locationCtx?.ipLocation.isp : 'Not found.'}`}</p>
                    </div>
                </div>
            }
            {locationCtx?.isLoading && 
                <Spinner />
            }
            {locationCtx?.hasSearched && !locationCtx?.ipLocation && !locationCtx.isLoading &&
                <div className="flex flex-col items-center justify-center font-['rubik'] md:flex-row bg-white w-full max-w-[267px] md:w-[80%] md:mx-auto md:max-w-5xl md:justify-center py-5 text-center rounded-lg mt-5 absolute top-[65%] md:top-[75%] z-50 md:shadow-md p-2.5">
                    <div>
                        <h1 className="font-bold text-gray-600 text-lg md:text-xl">Oops! No location found. Check your input and try again.</h1>
                    </div>
                </div>
            }
        </>
    )
}