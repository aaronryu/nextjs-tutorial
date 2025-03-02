import { generatePaymentId, payments } from '@/app/lib/placeholder-data'
import { NextResponse } from 'next/server'

export async function GET(request, context) {
  return NextResponse.json(payments)
}

export async function POST(request, context) {
  const requestBody = await request.json()
  requestBody.id = generatePaymentId()
  payments.push(requestBody)
  return NextResponse.json(payments)
}
