import { InputIp } from "./InputIp"
import { LocationInfo } from "./LocationInfo"

export const Infos = () => {
    return(
        <div className={`bg-[url(/assets/images/pattern-bg-mobile.png)] bg-center bg-cover bg-no-repeat md:bg-[url(/assets/images/pattern-bg-desktop.png)] h-[40vh] md:h-[35vh] flex flex-col items-center px-5 relative`}>
          <h1 className="text-lg md:text-2xl py-2 md:py-3 text-center font-['Rubik'] font-[500]">IP Address Tracker</h1>
          <InputIp />
          <LocationInfo />
        </div>
    )
}