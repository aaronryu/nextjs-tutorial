import ClientLinkButton from '@/components/ClientLinkButton'
import ServerLinkButton from '@/components/ServerLinkButton'

export default function NavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-row'>
      <div className='w-full md:w-44'>
        <ClientLinkButton href='/'>Logo</ClientLinkButton>
        <ClientLinkButton href='/dashboard'>1. Dashboard</ClientLinkButton>
        <ClientLinkButton href='/dashboard/invoices'>
          2. Invoices
        </ClientLinkButton>
        <ClientLinkButton href='/dashboard/customers'>
          3. Customers
        </ClientLinkButton>
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
