'use client'

import { useEffect, useState } from 'react'

export default function ClientUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('/api/users')
      const users = await response.json()
      setUsers(users)
    }
    getUsers()
  }, [])

  return (
    <div>
      {users.map((each, index) => (
        <div key={index}>{JSON.stringify(each)}</div>
      ))}
    </div>
  )
}
