import ServerLinkButton from '@/components/ServerLinkButton'

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))

export default async function Customer() {
  await wait(3000)

  return (
    <main className='text-center bg-blue-100 p-6 border-b-8 border-blue-700'>
      <div className='text-blue-500'>Customer 페이지</div>
      <ServerLinkButton href='customers/aaron'>Aaron 고객</ServerLinkButton>
      <ServerLinkButton href='customers/baron'>Baron 고객</ServerLinkButton>
      <ServerLinkButton href='customers/caron'>Caron 고객</ServerLinkButton>
    </main>
  )
}
