import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "애런의 새로운 Next 프로젝트",
  description: "애런의 앞으로 고생길이 훤하다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-[100px] bg-red-300" />
        {children}
      </body>
    </html>
  );
}
