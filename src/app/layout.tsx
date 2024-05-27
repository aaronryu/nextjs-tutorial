'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '애런의 새로운 Next 프로젝트',
  description: '애런의 앞으로 고생길이 훤하다',
}

function Button({ children, onClick }) {
  return (
    <div className='border-2 border-solid p-[10px] border-white inline-block' onClick={onClick}>
      {children}
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full h-[100px] bg-red-300 flex-row'>
          <Button onClick={() => router.back()}>{'← 뒤로가기'}</Button>
          <Button onClick={() => router.refresh()}>{'새로고침'}</Button>
          <Button onClick={() => router.forward()}>{'앞으로가기 →'}</Button>
        </div>
        {children}
      </body>
    </html>
  )
}
