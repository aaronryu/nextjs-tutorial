export const users = [
  {
    id: 1,
    name: 'Aaron',
    job: 'Developer',
    specialty: 'Frontend',
  },
  {
    id: 2,
    name: 'Baron',
    job: 'Developer',
    specialty: 'Backend',
  },
]

let currentUserId = 2

export function generateUserId() {
  return ++currentUserId
}
