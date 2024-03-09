import { NextResponse } from "next/server";
import Hertz from "./providers/hertz";

export async function GET(){
    const hertz = await Hertz();
    return NextResponse.json(hertz);
}