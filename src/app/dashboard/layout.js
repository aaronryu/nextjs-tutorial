import Link from 'next/link'

function LinkButton({ href, children }) {
  return (
    <Link href={href} className='border-2 border-solid p-[10px] border-white block'>
      {children}
    </Link>
  )
}

export default function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <LinkButton href='/'>Logo</LinkButton>
        <LinkButton href='/dashboard'>1. Dashboard</LinkButton>
        <LinkButton href='/dashboard/invoices'>2. Invoices</LinkButton>
        <LinkButton href='/dashboard/customers'>3. Customers</LinkButton>
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        <div className='w-full h-[100px] bg-red-500' />
        {children}
      </div>
    </div>
  )
}
