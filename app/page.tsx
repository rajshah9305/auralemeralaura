import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, User } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-80px)] px-4 text-center lg:text-left md:px-8 lg:px-12 relative">
      {/* Golden Woman Image */}
      <div className="absolute inset-0 lg:relative lg:w-1/2 flex items-center justify-center z-10 lg:z-auto">
        <Image
          src="/golden-woman.png"
          alt="Aura - Golden Woman"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="opacity-30 lg:opacity-100 animate-fade-in-up delay-1000"
          style={{ filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))" }} // Subtle glow
        />
      </div>

      {/* Content */}
      <div className="relative z-20 lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 drop-shadow-lg animate-fade-in-up">
          AURA
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl md:text-4xl animate-fade-in-up delay-200">
          Issue #1: The Star-Forged
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed animate-fade-in-up delay-400">
          A universe of power in her hands... but at what cost?
        </p>
        <p className="mt-4 max-w-3xl text-base text-gray-400 leading-relaxed animate-fade-in-up delay-600">
          When brilliant astrophysicist Dr. Elara Vance accidentally tears a rift in spacetime, she becomes bonded with
          cosmic forces beyond imagination. Now, as <span className="font-bold text-yellow-400">Aura</span>, she must
          protect reality itself from the very threats her experiment unleashed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-800">
          <Link href="/read-comic" passHref>
            <Button className="px-8 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Issue #1
            </Button>
          </Link>
          <Link href="/character" passHref>
            <Button
              variant="outline"
              className="px-8 py-3 text-lg font-semibold border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <User className="w-5 h-5 mr-2" />
              Explore Character
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
