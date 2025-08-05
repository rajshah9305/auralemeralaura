import type React from "react"
import Image from "next/image"
import { Sparkles, Infinity, Eye, Rocket, Shield, Brain } from "lucide-react"

export default function PowersPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 text-center md:px-8 lg:px-12 relative">
      {/* Neon Eyes Woman Image as background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/neon-eyes-woman.png"
          alt="Cosmic Powers Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="animate-pulse-slow"
          style={{ filter: "blur(5px) brightness(0.8)" }}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0a0a0a] opacity-80"></div>

      <h1 className="relative z-20 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-neon-blue drop-shadow-lg animate-fade-in-up">
        Powers
      </h1>
      <p className="relative z-20 mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed animate-fade-in-up delay-200">
        Explore the incredible cosmic abilities wielded by Aura and other powerful beings in this universe.
      </p>
      <div className="relative z-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        <PowerCard
          name="Cosmic Energy Manipulation"
          description="Control and unleash raw cosmic energy."
          icon={<Sparkles className="w-12 h-12" />}
        />
        <PowerCard
          name="Spacetime Rift Creation"
          description="Tear holes in reality for travel or attack."
          icon={<Infinity className="w-12 h-12" />}
        />
        <PowerCard
          name="Enhanced Senses"
          description="Perceive beyond normal human capabilities."
          icon={<Eye className="w-12 h-12" />}
        />
        <PowerCard
          name="Flight"
          description="Soar through the skies and space."
          icon={<Rocket className="w-12 h-12" />}
        />
        <PowerCard
          name="Force Fields"
          description="Generate protective energy barriers."
          icon={<Shield className="w-12 h-12" />}
        />
        <PowerCard
          name="Telekinesis"
          description="Move objects with the power of thought."
          icon={<Brain className="w-12 h-12" />}
        />
      </div>
    </section>
  )
}

function PowerCard({ name, description, icon }: { name: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-neon-blue flex flex-col items-center text-center animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-neon-glow">
      <div className="text-5xl mb-4 text-neon-blue">{icon}</div>
      <h3 className="text-2xl font-bold text-yellow-400">{name}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  )
}
