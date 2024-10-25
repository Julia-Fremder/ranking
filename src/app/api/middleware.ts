import { NextResponse } from 'next/server'

export async function middleware(data: HTMLAreaElement) {
  console.log('make data turn to csv', data)
  return NextResponse.next()
}