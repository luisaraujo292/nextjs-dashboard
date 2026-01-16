import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/welcome' };

export async function proxy() {
  const greeting = await get('greeting');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  return NextResponse.json(greeting);
  // return NextResponse.json("Bom dia!") - This is a test.
}