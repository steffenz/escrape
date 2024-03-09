export interface LeibilreturJourney {
    bookings: any;
    availableForPickup: string;
    pickupFrom: LeiebilreturLocation;
    deliverTo: LeiebilreturLocation;
    createDate: string;
    id: number;
    regNumber: string;
    extraInfo: string;
    freeFuel: boolean;
    freeAdditionalCosts: boolean;
    adminFee: number;
    deposit: boolean;
    feeForNoShow: number;
    carType: number;
    seats: number;
    gearType: number;
    requiredDrivingLicence: number;
    createdBy: number;
    company: number;
    bookingOpenDays: number;
  }
  
export interface LeiebilreturLocation {
    createdBy: number;
    company: number;
    id: number;
    name: string;
    line1: string;
    postCode: string | null;
    city: string;
    country: string;
  }