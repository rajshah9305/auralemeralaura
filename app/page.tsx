import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, User, Sparkles, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full min-h-[calc(100vh-160px)] gap-8 lg:gap-16">
        
        {/* LEFT SIDE - Golden Woman Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative group">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/30 via-yellow-400/10 to-transparent rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            
            {/* Main Image */}
            <div className="relative">
              <Image
                src="/golden-woman.png"
                alt="Aura - The Star-Forged"
                width={500}
                height={600}
                className="relative z-10 max-w-[350px] lg:max-w-[450px] w-full h-auto animate-fade-in-up delay-300 group-hover:scale-105 transition-transform duration-500"
                style={{ 
                  filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))",
                }}
                priority
              />
              
              {/* Floating Power Particles */}
              <div className="absolute top-1/4 -right-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute top-1/2 -left-6 w-2 h-2 bg-neon-blue rounded-full animate-bounce delay-300 opacity-40"></div>
              <div className="absolute bottom-1/3 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-700 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          
          {/* Main Title */}
          <div className="relative mb-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl animate-fade-in-up">
              AURA
            </h1>
            {/* Subtitle Overlay */}
            <div className="absolute -bottom-2 left-0 right-0 lg:left-0 lg:right-auto">
              <span className="text-xs sm:text-sm font-bold text-yellow-400/60 tracking-[0.3em] uppercase">
                COSMIC GUARDIAN
              </span>
            </div>
          </div>

          {/* Issue Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6 animate-fade-in-up delay-200 relative">
            Issue #1: The Star-Forged
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-black" />
            </div>
          </h2>

          {/* Main Description */}
          <p className="text-lg sm:text-xl text-yellow-400 font-medium mb-4 animate-fade-in-up delay-400 leading-relaxed">
            A universe of power in her hands... but at what cost?
          </p>
          
          {/* Detailed Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl animate-fade-in-up delay-600">
            When brilliant astrophysicist Dr. Elara Vance accidentally tears a rift in spacetime, she becomes bonded with
            cosmic forces beyond imagination. Now, as <span className="font-bold text-yellow-400 glow-text">Aura</span>, she must
            protect reality itself from the very threats her experiment unleashed.
          </p>

          {/* Stats/Analytics Section */}
          <div className="flex flex-wrap gap-6 mb-8 animate-fade-in-up delay-700">
            <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">50K+ Readers</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-neon-blue/20">
              <TrendingUp className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-gray-300">Trending #1</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-neon-purple/20">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-gray-300">5★ Rating</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-800">
            <Link href="/read-comic" passHref>
              <Button className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <BookOpen className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Read Issue #1</span>
              </Button>
            </Link>
            <Link href="/character" passHref>
              <Button
                variant="outline"
                className="group px-8 py-4 text-lg font-semibold border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <User className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Explore Character</span>
              </Button>
            </Link>
          </div>

          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up delay-1000">
            <Link href="/powers" className="text-xs font-medium text-gray-400 hover:text-neon-blue transition-colors duration-300 bg-gray-900/30 px-3 py-1 rounded-full border border-gray-700 hover:border-neon-blue/50">
              Cosmic Powers
            </Link>
            <Link href="/character" className="text-xs font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-300 bg-gray-900/30 px-3 py-1 rounded-full border border-gray-700 hover:border-yellow-400/50">
              Character Lore
            </Link>
            <Link href="/read-comic" className="text-xs font-medium text-gray-400 hover:text-neon-purple transition-colors duration-300 bg-gray-900/30 px-3 py-1 rounded-full border border-gray-700 hover:border-neon-purple/50">
              Full Series
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
