'use client'

import { useRouter } from 'next/navigation'

export default function ClientMenuButton({ href, children }) {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(href)}
      className='border-2 border-solid p-[10px] border-white block'
    >
      {children}
    </div>
  )
}
