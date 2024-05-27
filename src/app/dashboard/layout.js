import ClientMenuButton from '@/app/dashboard/menu-client'
import ServerMenuButton from '@/app/dashboard/menu-server'
import Image from 'next/image'

export default function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <ClientMenuButton href='/'>
          <Image
            src='/vercel.svg'
            alt='Next.js 에서 이미지를 넣을때는 다음과 같이 최적화된 커스텀 컴포넌트 <Image> 추가'
            width={100}
            height={24}
            priority
          />
        </ClientMenuButton>
        <ClientMenuButton href='/dashboard'>1. Dashboard</ClientMenuButton>
        <ClientMenuButton href='/dashboard/invoices'>2. Invoices</ClientMenuButton>
        <ClientMenuButton href='/dashboard/customers'>3. Customers</ClientMenuButton>
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        <div className='w-full h-[100px] bg-red-500' />
        {children}
      </div>
    </div>
  )
}
