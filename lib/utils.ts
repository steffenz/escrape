import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRevalidationInterval(fallback: number = 900): number{
  try {
    const interval = Number(process.env.PROVIDER_REVALIDATION_INTERVAL);
    if(!isNaN(interval)){
      return interval;
    }
  }
  catch(e){

  }
  return fallback;
}
