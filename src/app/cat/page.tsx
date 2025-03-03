'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const sub_id = 'aaron'

export default function CatPage() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
      .then((response) => response.json())
      .then((data) => setCats(data))
  }, [])

  async function addFavorite(image_id, sub_id) {
    const response = await fetch('http://localhost:3000/api/cats/favorite', {
      method: 'POST',
      body: JSON.stringify({
        image_id,
        sub_id,
      }),
    })
    console.log(await response.json())
  }

  return (
    <div>
      {cats.map((cat, index) => (
        <div className='inline-block'>
          <InlineImage
            key={index}
            src={cat.url}
            alt={'귀여운 고양이 사진 ' + cat.id}
          />
          <span className='py-1 flex justify-center gap-1'>
            <Button onClick={() => addFavorite(cat.id, sub_id)}>추가</Button>
            <Button onClick={() => {}}>삭제</Button>
          </span>
        </div>
      ))}
    </div>
  )
}

function InlineImage({ src, alt }) {
  return (
    <div className='relative w-[200px] h-[200px] aspect-square'>
      <Image className='object-cover' src={src} alt={alt} fill />
    </div>
  )
}

function Button({ children, onClick }) {
  return (
    <button
      className='rounded-sm border-1 px-2 py-1 bg-gray-100 hover:bg-gray-200'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
