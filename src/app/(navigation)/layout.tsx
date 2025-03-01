import Link from 'next/link'

function LinkButton({ href, children }) {
  return (
    <Link
      href={href}
      className='border-2 border-solid p-[10px] border-white block'
    >
      {children}
    </Link>
  )
}

export default function NavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-row'>
      <div className='w-full md:w-44'>
        <LinkButton href='/'>Logo</LinkButton>
        <LinkButton href='/dashboard'>1. Dashboard</LinkButton>
        <LinkButton href='/dashboard/invoices'>2. Invoices</LinkButton>
        <LinkButton href='/dashboard/customers'>3. Customers</LinkButton>
      </div>
      <div className='flex-grow'>
        <div className='w-full bg-red-700'>
          모든 (navigation) 페이지에서의 공통영역 RootLayout
        </div>
        {children}
      </div>
    </div>
  )
}
