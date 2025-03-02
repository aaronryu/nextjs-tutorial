import ClientUsers from '@/app/components/ClientUsers'
import ServeruUsers from '@/app/components/ServerUsers'

export default function Home() {
  return (
    <main>
      <div>
        <b>Client</b> Component 통한 유저 조회
      </div>
      <ClientUsers />
      <br />
      <div>
        <b>Server</b> Component 통한 유저 조회
      </div>
      <ServeruUsers />
    </main>
  )
}
