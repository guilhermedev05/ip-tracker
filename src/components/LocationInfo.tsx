import { useLocation } from "@/contexts/LocationContext";
import { Spinner } from "./Spinner";

export const LocationInfo = () => {
    const locationCtx = useLocation();
  
    return (
      <>
        {locationCtx?.ipLocation && !locationCtx.isLoading && (
          <div
            className="absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 
                       flex flex-col md:flex-row bg-white w-full max-w-[267px] md:w-[80%] 
                       md:max-w-5xl justify-center py-5 text-center rounded-lg shadow-md z-50
                       gap-2.5"
          >
            <div className="flex-1 border-r border-r-gray-200 md:text-left md:px-5">
              <h3 className="text-gray-400 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                IP Address
              </h3>
              <p className="text-gray-700 font-bold">{locationCtx?.ipLocation.ip}</p>
            </div>
            <div className="flex-1 border-r border-r-gray-200 md:text-left md:px-5">
              <h3 className="text-gray-400 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Location
              </h3>
              <p className="text-gray-700 font-bold">
                {`${locationCtx?.ipLocation.location.city}, ${locationCtx?.ipLocation.location.region}`}
              </p>
            </div>
            <div className="flex-1 border-r border-r-gray-200 md:text-left md:px-5">
              <h3 className="text-gray-400 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Timezone
              </h3>
              <p className="text-gray-700 font-bold">
                UTC {locationCtx?.ipLocation.location.timezone}
              </p>
            </div>
            <div className="flex-1 md:text-left md:px-5">
              <h3 className="text-gray-400 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                ISP
              </h3>
              <p className="text-gray-700 font-bold">
                {locationCtx?.ipLocation.isp.trim() !== "" ? locationCtx?.ipLocation.isp : "Not found."}
              </p>
            </div>
          </div>
        )}
        {locationCtx?.isLoading && <Spinner />}
        {locationCtx?.hasSearched && !locationCtx?.ipLocation && !locationCtx.isLoading && (
          <div
            className="absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 
                       flex flex-col items-center bg-white w-full max-w-[267px] md:w-[80%] 
                       md:max-w-5xl py-5 text-center rounded-lg shadow-md z-50"
          >
            <h1 className="font-bold text-gray-600 text-lg md:text-xl">
              Oops! No location found. Check your input and try again.
            </h1>
          </div>
        )}
      </>
    );
  };
  