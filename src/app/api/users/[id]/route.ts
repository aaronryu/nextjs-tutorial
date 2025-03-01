import { users } from '@/app/lib/placeholder-data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }) {
  const { id } = await params
  const found = users.filter((each) => String(each.id) === id)
  return NextResponse.json(found.length > 0 ? found[0] : null)
}

export async function PATCH(request: NextRequest, { params }) {
  const { id } = await params
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get('name')
  const job = searchParams.get('job')
  const specialty = searchParams.get('specialty')

  const found = users.filter((each) => String(each.id) === id)
  const user = found.length > 0 ? found[0] : null
  if (name) user.name = name
  if (job) user.job = job
  if (specialty) user.specialty = specialty

  return NextResponse.json(users)
}
