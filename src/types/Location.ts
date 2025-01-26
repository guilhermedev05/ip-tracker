export type Location = {
    ip: string,
    location: {
        city: string,
        region: string,
        timezone: string
        lat: number,
        lng: number
    }
    isp: string
}