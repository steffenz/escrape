import { NextResponse } from "next/server";
import Hertz from "./providers/hertz";
import Leiebilretur from './providers/leiebilretur';

export async function GET(){
    const hertz = await Hertz();
    const leiebilretur = await Leiebilretur();
    return NextResponse.json([...hertz, ...leiebilretur]);
}