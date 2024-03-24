import Hertz from './hertz';
// import Hjemferd from './hjemferd';
import Leiebilretur from './leiebilretur';

export default async function getJournies(){
    const hertz = await Hertz();
    const leiebilretur = await Leiebilretur();
    // const hjemferd = await Hjemferd();
    return [...hertz, ...leiebilretur];
}