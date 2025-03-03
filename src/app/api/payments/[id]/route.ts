import { payments } from '@/app/lib/placeholder-data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }) {
  const { id } = await params
  const found = payments.filter((each) => String(each.id) === id)
  return NextResponse.json(found.length > 0 ? found[0] : null)
}

export async function PATCH(request: NextRequest, { params }) {
  const { id } = await params
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const product = searchParams.get('product')
  const quantity = searchParams.get('quantity')
  const unitPrice = searchParams.get('unitPrice')
  const userId = searchParams.get('userId')

  const found = payments.filter((each) => String(each.id) === id)
  const payment = found.length > 0 ? found[0] : null
  if (category) payment.category = category
  if (product) payment.product = product
  if (quantity) {
    payment.quantity = isNaN(Number(quantity)) ? 1 : Number(quantity)
    payment.totalPrice = payment.unitPrice * payment.quantity
  }
  if (unitPrice) {
    payment.unitPrice = isNaN(Number(unitPrice)) ? 0 : Number(unitPrice)
    payment.totalPrice = payment.unitPrice * payment.quantity
  }
  if (userId) {
    payment.userId = isNaN(Number(userId)) ? undefined : Number(userId)
  }

  return NextResponse.json(payments)
}

export async function PUT(request: NextRequest, { params }) {
  const { id } = await params
  const formData = await request.formData()
  const category: string = formData.get('category') as string
  const product = formData.get('product') as string
  const quantity = formData.get('quantity')
  const unitPrice = formData.get('unitPrice')
  const userId = formData.get('userId')

  const found = payments.filter((each) => String(each.id) === id)
  const payment = found.length > 0 ? found[0] : null
  if (category) payment.category = category
  if (product) payment.product = product
  if (quantity) {
    payment.quantity = isNaN(Number(quantity)) ? 1 : Number(quantity)
    payment.totalPrice = payment.unitPrice * payment.quantity
  }
  if (unitPrice) {
    payment.unitPrice = isNaN(Number(unitPrice)) ? 0 : Number(unitPrice)
    payment.totalPrice = payment.unitPrice * payment.quantity
  }
  if (userId) {
    payment.userId = isNaN(Number(userId)) ? undefined : Number(userId)
  }

  return NextResponse.json(payments)
}
