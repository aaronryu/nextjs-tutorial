import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CustomerLayout title',
  description: 'CustomerLayout description',
}

export default function CustomerLayout({ children }) {
  return (
    <>
      <div className='w-full bg-blue-700'>Customer 공통영역 Layout</div>
      {children}
    </>
  )
}
