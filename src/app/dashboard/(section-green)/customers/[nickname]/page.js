export default function CustomersNickname(/* context */ { params, searchParams }) {
  /**
   * Context 객체 구성요소
   *  - 1. params : URL 상의 파라미터 (스프링에서 @PathVariable)
   *    | 본 예시 : { params: { nickname: "aaron" } }
   *  - 2. searchParams : URL 마지막에 ? 로 시작하는 파라미터 (스프링에서 @RequestParam)
   */
  const { nickname } = params
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      어떤 유저의 정보를 표시할까요? <b>{nickname}</b>
    </main>
  )
}
