'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

export default function ClientLinkButton({ href, children }) {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(href)}
      className={clsx('border-2 border-solid p-[10px] border-white block', {
        '!border-amber-500': pathname === href,
      })}
    >
      {children}
    </div>
  )
}
