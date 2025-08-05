import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aura Cosmic Weave",
  description: "A universe of power in her hands... but at what cost?",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2a] to-[#0a0a0a] text-white relative overflow-hidden">
            {/* Cosmic background elements */}
            <div className="absolute inset-0 z-0 opacity-30">
              <img
                src="/cosmic-nebula-starfield.png"
                alt="Cosmic Background"
                className="w-full h-full object-cover animate-pulse-slow"
              />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0a0a0a] opacity-70"></div>
            <div className="absolute inset-0 z-10 bg-radial-gradient-custom opacity-50"></div>

            <Header />
            <main className="relative z-20 flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
