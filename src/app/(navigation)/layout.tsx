export default function NavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='w-full bg-red-700'>
        모든 (navigation) 페이지에서의 공통영역 RootLayout
      </div>
      {children}
    </>
  )
}
