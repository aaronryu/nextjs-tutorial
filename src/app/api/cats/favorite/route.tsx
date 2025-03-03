import { NextResponse } from 'next/server'

export async function POST(request, context) {
  const { image_id, sub_id } = await request.json()
  const response = await fetch('https://api.thecatapi.com/v1/favourites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.CAT_API_KEY,
    },
    body: JSON.stringify({
      image_id,
      sub_id,
    }),
  })
  const body = await response.json()
  console.log(body)
  return NextResponse.json(body)
}
