import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilal Pyra | MERN Stack Developer & Student",
  description:
    "Portfolio of Bilal Pyra, MERN Stack Developer & Computer Science Student at University of Education Multan Campus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-pink-100 selection:text-pink-900 bg-white text-zinc-800`}
      >
        {children}
      </body>
    </html>
  );
}
