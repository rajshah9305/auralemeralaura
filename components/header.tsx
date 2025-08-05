"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, Zap, BookOpen } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-20 flex items-center justify-between px-4 py-4 md:px-8 lg:px-12">
      <Link href="/" className="text-2xl font-bold tracking-wider text-yellow-400">
        AURA
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="/" icon={<Home className="w-5 h-5" />} label="Home" active={pathname === "/"} />
        <NavLink
          href="/character"
          icon={<User className="w-5 h-5" />}
          label="Character"
          active={pathname === "/character"}
        />
        <NavLink href="/powers" icon={<Zap className="w-5 h-5" />} label="Powers" active={pathname === "/powers"} />
        <NavLink
          href="/read-comic"
          icon={<BookOpen className="w-5 h-5" />}
          label="Read Comic"
          active={pathname === "/read-comic"}
        />
      </nav>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#0a0a0a] text-white border-l border-gray-800">
          <div className="flex flex-col gap-4 py-6">
            <NavLink href="/" icon={<Home className="w-5 h-5" />} label="Home" active={pathname === "/"} />
            <NavLink
              href="/character"
              icon={<User className="w-5 h-5" />}
              label="Character"
              active={pathname === "/character"}
            />
            <NavLink href="/powers" icon={<Zap className="w-5 h-5" />} label="Powers" active={pathname === "/powers"} />
            <NavLink
              href="/read-comic"
              icon={<BookOpen className="w-5 h-5" />}
              label="Read Comic"
              active={pathname === "/read-comic"}
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function NavLink({
  href,
  icon,
  label,
  active,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-300 ${
        active
          ? "bg-yellow-500 text-black font-semibold shadow-md"
          : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
