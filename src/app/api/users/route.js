import { NextResponse } from 'next/server'

const users = [
  {
    id: 1,
    name: 'Aaron',
    job: 'Developer',
    specialty: 'Frontend',
  },
  {
    id: 2,
    name: 'Baron',
    job: 'Developer',
    specialty: 'Backend',
  },
]

export async function GET(request, context) {
  return NextResponse.json(users)
}
