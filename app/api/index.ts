import Hertz from './providers/hertz-freerider';
import { Provider } from './types';
import { cache } from 'react';

// export default async function getProviders(): Promise<Provider[]>{
//     const hertz = await Hertz();
//     return [ hertz ];
// }

export const revalidate = 3600

export const getProviders = cache(async (id: string): Promise<Provider[]> => {
    const hertz = await Hertz();
    return [ hertz ];
})