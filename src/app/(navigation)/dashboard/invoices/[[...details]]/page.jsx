import ServerLinkButton from '@/components/ServerLinkButton'

export default async function InvoiceDetails({ params, searchParams }) {
  console.log(await params)
  console.log(await searchParams)

  const { details } = await params
  const type = details?.[0]
  const desc = details?.[1]

  return (
    <>
      {type === undefined ? (
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
      ) : (
        <main className='text-center bg-blue-50 p-6'>
          어떤 요구사항인지 상세 내용을 볼까요?
          <div>- 타입은 {type},</div>
          <div>- 상세내용은 {desc}</div>
        </main>
      )}
    </>
  )
}
