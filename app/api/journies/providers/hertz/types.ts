export interface CarRental {
  pickupLocationName: string;
  returnLocationName: string;
  routes: Route[];
}

export interface Route {
  id: number;
  transportOfferId: number;
  pickupLocation: Location;
  returnLocation: Location;
  priorityOrder: number;
  distance: number;
  originalDistance: number;
  travelTime: number;
  originalTravelTime: number;
  availableAt: string;
  latestReturn: string;
  expireTime: string;
  carModel: string;
  publicDescription: string;
  publicInformation: string;
}

export interface Location {
  name: string;
  tracCode: string;
  country: string;
  emailAddress: string;
  address: string;
  city: string;
  phoneNumber: string;
  regularOpeningHours: { [key: string]: OpeningHours };
  geoLat: number;
  geoLon: number;
  kiosk: boolean;
  infoTextDropOffEnglish: string | null;
  infoTextDropOffNative: string | null;
  infoTextLocationEnglish: string | null;
  infoTextLocationNative: string;
  infoTextParkingEnglish: string | null;
  infoTextParkingNative: string | null;
  infoTextMiscEnglish: string | null;
  infoTextMiscNative: string | null;
  infoTextReturnEnglish: string | null;
  infoTextReturnNative: string | null;
}

export interface OpeningHours {
  openingTime: string | null;
  closingTime: string | null;
}
