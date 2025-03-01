import { users } from '@/app/lib/placeholder-data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }) {
  const { id } = await params
  const found = users.filter((each) => String(each.id) === id)
  return NextResponse.json(found.length > 0 ? found[0] : null)
}
