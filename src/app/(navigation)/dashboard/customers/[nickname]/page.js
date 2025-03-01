export default async function CustomersNickname({ params, searchParams }) {
  console.log(await params)
  console.log(await searchParams)
  return (
    <main className='text-center bg-blue-50 p-6'>
      어떤 유저의 정보를 표시할까요? = <b>{(await params).nickname}</b>
    </main>
  )
}
