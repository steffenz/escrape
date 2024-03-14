export interface Journey {
    id: string
    provider: string,
    availableFrom?: Date,
    availableTo?: Date,
    carDescription: string
    pickupPoint: POI,
    returnPoint: POI,
}

export interface POI {
    name: string,
    addressLine?: string,
    postalCode?: string | null,
    postalPlace?: string,
    phone?: string,
    email?: string,
    lat?: number,
    lon?: number,
}