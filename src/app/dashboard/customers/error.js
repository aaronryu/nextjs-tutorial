'use client' // Error components must be Client Components

export default function CustomersError() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div className='text-gray-500'>
        <div>에러가 발생하였으니, 적절한 처리가 필요합니다.</div>
        <div>에러가 발생했음에도 페이지 전체가 오류나지 않고</div>
        <div>
          <b>해당 URL 에 해당하는 page.js 영역에 error.js 표기</b>
        </div>
      </div>
    </main>
  )
}
