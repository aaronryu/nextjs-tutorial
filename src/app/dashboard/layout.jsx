import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className='w-full bg-orange-700'>Dashboard 공통영역 Layout</div>
      {children}
    </>
  )
}
