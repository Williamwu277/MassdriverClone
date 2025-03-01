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
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
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
