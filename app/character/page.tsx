import Image from "next/image"

export default function CharacterPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 text-center md:px-8 lg:px-12">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 drop-shadow-lg animate-fade-in-up">
        Character
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed animate-fade-in-up delay-200">
        Dive deep into the lore of Aura and the universe she inhabits. Discover her origins, allies, and formidable
        foes.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        <CharacterCard
          name="Aura (Star-Forged)"
          description="The protagonist, bonded with cosmic forces."
          image="/golden-woman.png"
        />
        <CharacterCard
          name="Elara Vance (Human Form)"
          description="The brilliant astrophysicist before her transformation."
          image="/blue-halo-woman.png"
        />
        <CharacterCard
          name="The Crimson Enigma"
          description="A powerful adversary with a mysterious past."
          image="/red-suit-woman.png"
        />
        <CharacterCard
          name="The Shadow Weaver"
          description="An elusive figure manipulating cosmic threads."
          image="/roses-woman.png"
        />
        <CharacterCard
          name="The Psionic Sentinel"
          description="A guardian with advanced mental abilities."
          image="/neon-eyes-woman.png"
        />
        <CharacterCard
          name="The Chronos Guardian"
          description="Protector of the timeline, from a distant future."
          image="/futuristic-guardian.png"
        />
      </div>
    </section>
  )
}

function CharacterCard({ name, description, image }: { name: string; description: string; image: string }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 flex flex-col items-center text-center animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-neon-glow">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={128}
        height={128}
        className="rounded-full object-cover mb-4 border-2 border-yellow-500 w-32 h-32"
      />
      <h3 className="text-2xl font-bold text-yellow-400">{name}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  )
}
