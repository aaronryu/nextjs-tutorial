import Link from 'next/link'

export default function ServerLinkButton({ href, children }) {
  return (
    <Link
      href={href}
      className='border-2 border-solid p-[10px] border-white block'
    >
      {children}
    </Link>
  )
}
