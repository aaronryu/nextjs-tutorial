'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CatPage() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
      .then((response) => response.json())
      .then((data) => setCats(data))
  }, [])

  return (
    <div>
      {cats.map((cat, index) => (
        <InlineImage
          key={index}
          src={cat.url}
          alt={'귀여운 고양이 사진 ' + cat.id}
        />
      ))}
    </div>
  )
}

function InlineImage({ src, alt }) {
  return (
    <div className='inline-block relative w-[200px] h-[200px] aspect-square'>
      <Image className='object-cover' src={src} alt={alt} fill />
    </div>
  )
}
