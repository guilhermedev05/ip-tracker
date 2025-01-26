import { useLocation } from "@/contexts/LocationContext"
import axios from "axios"
import { useState } from "react"

export const InputIp = () => {

    const locationCtx = useLocation()
    const [inputIp, setInputIp] = useState('')

    const handleGetLocation = async () => {
        let cleanedInput = inputIp;
        locationCtx?.setHasSearched(false)
        locationCtx?.setIsLoading(true)
        
        if (inputIp.includes('https://') || inputIp.includes('http://')) {
            try {
                const url = new URL(inputIp);
                cleanedInput = url.hostname;
            } catch (error) {
                console.error('Erro ao processar a URL:', error);
                locationCtx?.setIpLocation(null)
                return;
            }finally{
                locationCtx?.setIsLoading(false)
                locationCtx?.setHasSearched(true)
            }
        }

        let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9E9u0TKCYyYiz4ztF6wYxZeuoa7tY&ipAddress=${cleanedInput}`;
        if (cleanedInput.includes('.')) {
            url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9E9u0TKCYyYiz4ztF6wYxZeuoa7tY&domain=${cleanedInput}`;
        }
        try {
            const resp = await axios.get(`${url}`)
            const json = resp.data
            locationCtx?.setIpLocation(json)
        } catch (error) {
            console.log('Ocorreu um erro na requisição: ', error)
            locationCtx?.setIpLocation(null)
        } finally {
            locationCtx?.setIsLoading(false)
            locationCtx?.setHasSearched(true)
        }

    }

    return (
        <div className="flex w-full max-w-md">
            <input type="text" placeholder="Search for any IP Adress or domain" value={inputIp} onChange={e => setInputIp(e.target.value)} className="bg-white p-3 rounded-xl text-black rounded-se-none rounded-ee-none w-full outline-none focus:shadow focus:shadow-gray-500 transition-all duration-200 ease-in" />
            <div onClick={handleGetLocation} className="bg-black w-12 flex items-center justify-center rounded-xl rounded-ss-none rounded-es-none cursor-pointer outline-none hover:bg-gray-700 transition-all ease-in duration-100" >
                <img src="/assets/images/icon-arrow.svg" alt="" />
            </div>
        </div>
    )
}