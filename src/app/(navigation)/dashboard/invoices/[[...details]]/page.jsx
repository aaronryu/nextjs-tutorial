export default async function InvoiceDetails({ params, searchParams }) {
  console.log(await params)
  console.log(await searchParams)

  const { details } = await params
  const type = details?.[0]
  const desc = details?.[1]

  return (
    <main className='text-center bg-blue-50 p-6'>
      어떤 요구사항인지 상세 내용을 볼까요?
      <div>- 타입은 {type},</div>
      <div>- 상세내용은 {desc}</div>
    </main>
  )
}
