import React from 'react'

export default function CustomerLayout({ children }) {
  return (
    <>
      <div className='w-full bg-blue-700'>Customer 공통영역 Layout</div>
      {children}
    </>
  )
}
