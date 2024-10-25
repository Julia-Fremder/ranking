'use server'

import { NextResponse } from "next/server"


export async function getRanking(url: string) {
  try {
    const rankingHTML = await fetch(url)

    return NextResponse.json(rankingHTML.json())
    // Call database
  } catch (error) {
    console.log(error)
    // Handle errors
  }


}