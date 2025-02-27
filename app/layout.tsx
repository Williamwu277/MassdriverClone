import type { Metadata } from "next";
import NavSection from "./ui/navSection"
import Banner from "./ui/banner"
import FooterSection from "./ui/footerSection"
import "./globals.css";

export const metadata: Metadata = {
  title: "Massdriver Clone",
  description: "Massdriver Clone Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner/>
        <NavSection/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
