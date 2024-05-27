export default function InvoicesInformation(/* context */ { params, searchParams }) {
  /**
   * Context 객체 구성요소
   *  - 1. params : URL 상의 파라미터 (스프링에서 @PathVariable)
   *    | 본 예시 : { params: { information: [type, detail, ...] } }
   *  - 2. searchParams : URL 마지막에 ? 로 시작하는 파라미터 (스프링에서 @RequestParam)
   */
  const { information } = params
  const [type, detail] = information
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      어떤 계약에 대한 내용을 볼까요?
      <div>타입은 {type}과 같고,</div>
      <div>상세내용은 {detail}과 같습니다</div>
    </main>
  )
}
