export default function Customer() {
  if (true) {
    throw new Error('일부러 에러 발생')
  }
  return (
    <main className='text-center bg-blue-100 p-6 border-b-8 border-blue-700'>
      <div className='text-blue-500'>Customer 페이지</div>
    </main>
  )
}
