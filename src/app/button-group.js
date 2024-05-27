'use client'

import { useRouter } from 'next/navigation'

function Button({ children, onClick }) {
  return (
    <div className='border-2 border-solid p-[10px] border-white inline-block' onClick={onClick}>
      {children}
    </div>
  )
}

export default function ButtonGroup() {
  const router = useRouter()
  return (
    <div className='flex-row'>
      <Button onClick={() => router.back()}>{'← 뒤로가기'}</Button>
      <Button onClick={() => router.refresh()}>{'새로고침'}</Button>
      <Button onClick={() => router.forward()}>{'앞으로가기 →'}</Button>
    </div>
  )
}
