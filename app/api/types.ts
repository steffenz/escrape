export interface Journey {
    fromTitle: string,
    toTitle: string,
    fromDate: string,
    toDate: string,
    description: string,
    link: string
}

export interface Provider {
    name: string,
    url: string,
    lastUpdated: Date
    journies: Journey[]
}