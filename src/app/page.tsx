import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image
        src="/vercel.svg"
        alt="Next.js 에서는 이미지를 사용할때 최적화가 적용된 자체 <Image/> 를 사용한다."
        width={100}
        height={24}
        priority
      />
      Hello, World!
    </main>
  );
}
