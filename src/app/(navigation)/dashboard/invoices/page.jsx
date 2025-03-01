import ServerLinkButton from '@/components/ServerLinkButton'

export default function Invoice() {
  return (
    <main className='text-center bg-green-100 p-6 border-b-8 border-green-700'>
      <div className='text-green-500'>Invoice 페이지</div>
      <ServerLinkButton href='invoices/fix/computer'>
        컴퓨터 고쳐주세요
      </ServerLinkButton>
      <ServerLinkButton href='invoices/buy/bread'>
        빵 사다주세요
      </ServerLinkButton>
      <ServerLinkButton href='invoices/pay/apple'>
        사과 결제해주세요
      </ServerLinkButton>
    </main>
  )
}
