import { generateUserId, users } from '@/app/lib/placeholder-data'
import { NextResponse } from 'next/server'

export async function GET(request, context) {
  return NextResponse.json(users)
}

export async function POST(request, context) {
  const requestBody = await request.json()
  requestBody.id = generateUserId()
  users.push(requestBody)
  return NextResponse.json(users)
}
