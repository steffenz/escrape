export interface Journey {
    id: string
    provider: string,
    availableFrom?: string,
    availableTo?: string,
    carDescription: string
    pickupPoint: POI,
    returnPoint: POI,
}

export interface POI {
    name: string,
    addressLine?: string,
    postalCode?: number,
    postalPlace?: string,
    phone?: string,
    email?: string,
    lat?: number,
    lon?: number,
}