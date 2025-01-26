import { InputIp } from "./InputIp"
import { MapInfo } from "./MapInfo"

export const Infos = () => {
    return(
        <div className={`bg-[url(/assets/images/pattern-bg-mobile.png)] bg-center bg-cover bg-no-repeat md:bg-[url(/assets/images/pattern-bg-desktop.png)] h-[40vh] md:h-[35vh] flex flex-col items-center px-5 relative`}>
          <h1 className="text-xl py-2.5 text-center font-['Rubik'] font-bold">IP Address Tracker</h1>
          <InputIp />
          <MapInfo />
        </div>
    )
}