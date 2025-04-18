import Footer from "@/Components/Main/Footer";
import Navbar from "@/Components/Main/Navbar";
import StarsCanvas from "@/Components/Main/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
  icons: {
    icon: "/favicon.png", // You can also use PNG: "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
