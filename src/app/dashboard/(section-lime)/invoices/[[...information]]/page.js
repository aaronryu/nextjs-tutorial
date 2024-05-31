export default function InvoicesInformation(/* context */ { params, searchParams }) {
  /**
   * Context 객체 구성요소
   *  - 1. params : URL 상의 파라미터 (스프링에서 @PathVariable)
   *    | 본 예시 : { params: { information: [type, detail, ...] } }
   *  - 2. searchParams : URL 마지막에 ? 로 시작하는 파라미터 (스프링에서 @RequestParam)
   */
  const { information } = params
  /**
   * [...information] 에서 [[...information]] 으로 바꿈으로 인해
   *  - { params: { information: undefined } }
   *  - 아래 console.log 서버 로그를 확인해보아라! ('use client' 없는 서버 컴포넌트니까 서버에서 로그 확인해야지)
   */
  console.log(params)
  console.log(information)
  const type = information?.[0]
  const detail = information?.[1]

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div className='text-gray-400'>
        이 페이지는 /dashboard 의 Layout 을 계승받은 /dashboard/invoices 페이지 입니다
      </div>
      어떤 계약에 대한 내용을 볼까요?
      <div>타입은 {type}과 같고,</div>
      <div>상세내용은 {detail}과 같습니다</div>
    </main>
  )
}
