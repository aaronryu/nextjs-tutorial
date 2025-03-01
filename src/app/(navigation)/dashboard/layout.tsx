import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DashboardLayout title',
  description: 'DashboardLayout description',
}

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className='w-full bg-orange-700'>Dashboard 공통영역 Layout</div>
      {children}
    </>
  )
}
