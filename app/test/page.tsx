import { getProviders } from '../api';

export const 
    dynamic = 'auto',
    dynamidParams = true,
    revalidate = 3600,
    fetchCache= 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

export default async function Page(){
    const providers = await getProviders('providers-cached');

    console.log(providers);
    return(<h1>Hello World</h1>);
}

