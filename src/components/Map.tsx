import { useLocation } from "@/contexts/LocationContext";
import { useEffect, useRef, useState } from "react";
import L, { LeafletMouseEvent } from "leaflet";

export const Map = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const locationCtx = useLocation()
    const [oldLat, setOldLat] = useState(0)
    const [oldLng, setOldLng] = useState(0)

    var popup = L.popup();

    const onMapClick = (e: LeafletMouseEvent) => {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mapRef.current!);
    }


    useEffect(() => {
        if (ref.current && !mapRef.current) {

            mapRef.current = L.map(ref.current).setView([32.69922, -117.11281], 13);

            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(mapRef.current);

            var marker = L.marker([32.69922, -117.11281]).addTo(mapRef.current);
            var markerImg = marker.getElement()
            if (markerImg) markerImg.src = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png'

            mapRef.current?.on('click', onMapClick);
            if (locationCtx?.ipLocation) {
                setOldLat(locationCtx?.ipLocation.location.lat)
                setOldLng(locationCtx?.ipLocation.location.lng)

                mapRef.current.setView([locationCtx?.ipLocation.location.lat, locationCtx?.ipLocation.location.lng], 13)
                marker = L.marker([locationCtx.ipLocation.location.lat, locationCtx.ipLocation.location.lng]).addTo(mapRef.current)
                markerImg = marker.getElement()

                if (markerImg) markerImg.src = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png'

            } else if(locationCtx?.hasSearched && !locationCtx.ipLocation){

                mapRef.current.setView([oldLat, oldLng], 13)
                marker = L.marker([oldLat, oldLng]).addTo(mapRef.current)
                markerImg = marker.getElement()
                
                if (markerImg) markerImg.src = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png'
            }
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [locationCtx?.ipLocation]);

    return (
        <div
            id="map"
            ref={ref}
            className="h-[60vh] md:h-[65vh] w-full max-w-screen-2xl z-0"
        ></div>
    )
}