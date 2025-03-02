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

export const payments = [
  {
    id: 1,
    category: 'small',
    product: 'A Product',
    quantity: 2,
    unitPrice: 20000,
    totalPrice: 40000,
    createAt: '2022-06-24 13:00:00',
    userId: 1,
  },
  {
    id: 2,
    category: 'middle',
    product: 'B Product',
    quantity: 5,
    unitPrice: 100000,
    totalPrice: 500000,
    createAt: '2021-01-20 19:30:00',
    userId: 1,
  },
]

let currentPaymentId = 2

export function generatePaymentId() {
  return ++currentPaymentId
}
