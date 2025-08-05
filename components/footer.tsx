import Link from "next/link"
export function Footer() {
  return (
    <footer className="relative z-20 py-8 px-4 md:px-8 lg:px-12 text-center text-gray-500 border-t border-gray-800 mt-auto">
      <p>&copy; {new Date().getFullYear()} Aura Cosmic Weave. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="#" className="hover:text-yellow-400 transition-colors">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-yellow-400 transition-colors">
          Terms of Service
        </Link>
      </div>
    </footer>
  )
}
