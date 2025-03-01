export default function About() {
  return (
    <main className='text-center bg-gray-100 p-6 border-b-8 border-gray-700'>
      <div className='text-gray-500'>
        <b>About 페이지</b>
        <br />
        <div>/app/about/page.jsx 에 위치하지 않고</div>
        <div>
          /app/<b>(non-navigation)</b>/about/page.jsx 에 위치함으로써
        </div>
        <br />
        <div>RootLayout 이 적용되지 않아</div>
        <div>
          http://localhost:3000<b>/</b> 로 시작하는 <b>/about</b> 이지만
        </div>
        <div>
          최상단에 빨간 배경의 RootLayout 영역이 보이지않음을 알 수 있다.
        </div>
      </div>
    </main>
  )
}
