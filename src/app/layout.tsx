import type { Metadata } from "next"
import { Archivo } from "next/font/google"

import "@/assets/styles/globals.css"

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  variable: "--font-archivo",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alex Taylor | Portfolio",
  description:
    "Portfolio website of Alex Taylor showcasing selected works, testimonials, and more.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>{children}</body>
    </html>
  )
}
