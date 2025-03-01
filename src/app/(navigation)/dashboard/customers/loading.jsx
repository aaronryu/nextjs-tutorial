'use client' // Loading Components must be Client Components

export default function CustomerLoading() {
  return (
    <main className='text-center bg-gray-100 p-6 border-b-8 border-gray-700'>
      <div className='text-gray-500'>
        <div>
          <b>페이지 로딩중에 있습니다.</b>
        </div>
        <br />
        <div>
          <b>
            꼭 주의해야할것은 error.jsx 나 loading.jsx 와 같은 파일들은
            <br />
            'use client' 꼭 명시해야한다는것
          </b>
        </div>
      </div>
    </main>
  )
}
