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
        <ServerLinkButton href='/dashboard'>1. Dashboard</ServerLinkButton>
        <ServerLinkButton href='/dashboard/invoices'>
          2. Invoices
        </ServerLinkButton>
        <ServerLinkButton href='/dashboard/customers'>
          3. Customers
        </ServerLinkButton>
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
