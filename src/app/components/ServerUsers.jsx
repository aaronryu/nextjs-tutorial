export default async function ServeruUsers() {
  const response = await fetch('http://localhost:3000/api/users')
  const users = await response.json()

  return (
    <div>
      {users.map((each, index) => (
        <div key={index}>{JSON.stringify(each)}</div>
      ))}
    </div>
  )
}
