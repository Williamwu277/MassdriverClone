import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import NavSection from "./ui/navSection"
import Banner from "./ui/banner"
import FooterSection from "./ui/footerSection"
import Chat from "./ui/chat"
import "./globals.css";

export const metadata: Metadata = {
  title: "Massdriver Clone",
  description: "Massdriver Clone Landing Page",
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Banner/>
        <NavSection/>
        {children}
        <FooterSection/>
        <Chat/>
      </body>
    </html>
  );
}
