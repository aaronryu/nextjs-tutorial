export default function Customers() {
  if (true) {
    throw new Error('일부러 에러 발생')
  }
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div className='text-gray-500'>
        이 페이지는 /dashboard 의 Layout 을 계승받은 /dashboard/customers 페이지 입니다
      </div>
    </main>
  )
}
