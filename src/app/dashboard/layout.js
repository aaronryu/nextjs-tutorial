import ClientMenuButton from '@/app/dashboard/menu-client'
import ServerMenuButton from '@/app/dashboard/menu-server'

export default function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <ClientMenuButton href='/'>Logo</ClientMenuButton>
        <ServerMenuButton href='/dashboard'>1. Dashboard</ServerMenuButton>
        <ServerMenuButton href='/dashboard/invoices'>2. Invoices</ServerMenuButton>
        <ServerMenuButton href='/dashboard/customers'>3. Customers</ServerMenuButton>
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        <div className='w-full h-[100px] bg-red-500' />
        {children}
      </div>
    </div>
  )
}
