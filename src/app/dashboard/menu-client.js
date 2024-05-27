'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

export default function ClientMenuButton({ href, children }) {
  const pathname = usePathname()
  const router = useRouter()

  const isCurrentPage = pathname === href

  return (
    <div
      onClick={() => router.push(href)}
      className={clsx(
        'border-2 border-solid p-[10px] block',
        isCurrentPage ? 'border-red-500' : 'border-white',
      )}
    >
      {children}
    </div>
  )
}
