"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ReadComicPage() {
  const comicIssues = [
    {
      issueNumber: 1,
      title: "The Star-Forged",
      description:
        "The beginning of Aura's cosmic journey, as Dr. Elara Vance accidentally tears a rift in spacetime and becomes bonded with cosmic forces.",
      image: "/aura-comic-issue-1-cover.png",
      fullSynopsis:
        "In a groundbreaking experiment, astrophysicist Dr. Elara Vance inadvertently merges with an ancient cosmic entity, transforming her into Aura. This issue details her struggle to control her newfound powers and the immediate threats that emerge from the fractured reality she created.",
    },
    {
      issueNumber: 2,
      title: "Echoes of the Void",
      description: "Aura faces a new threat from deep space, an entity that feeds on cosmic energy.",
      image: "/aura-comic-issue-2-cover.png",
      fullSynopsis:
        "Following the events of 'The Star-Forged', Aura discovers that her transformation has attracted unwanted attention from across the cosmos. A shadowy entity, known only as the Void Weaver, begins to drain energy from star systems, threatening to plunge the universe into eternal darkness. Aura must confront this new menace, pushing her powers to their limits.",
    },
    {
      issueNumber: 3,
      title: "Galactic Nexus",
      description: "The fate of the galaxy hangs in the balance as multiple cosmic factions converge.",
      image: "/aura-comic-issue-3-cover.png",
      fullSynopsis:
        "The conflict escalates as various galactic empires and ancient cosmic factions become aware of Aura's existence and the growing threat of the Void Weaver. Aura finds herself at the center of a cosmic war, forced to forge uneasy alliances and make impossible choices to protect not just Earth, but the entire fabric of reality.",
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 text-center md:px-8 lg:px-12">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 drop-shadow-lg animate-fade-in-up">
        Read Comic
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed animate-fade-in-up delay-200">
        Immerse yourself in the epic saga of Aura. Select an issue to begin your journey.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {comicIssues.map((issue) => (
          <ComicIssueCard key={issue.issueNumber} {...issue} />
        ))}
      </div>
    </section>
  )
}

function ComicIssueCard({
  issueNumber,
  title,
  description,
  image,
  fullSynopsis,
}: {
  issueNumber: number
  title: string
  description: string
  image: string
  fullSynopsis: string
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 flex flex-col items-center text-center animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-neon-glow">
      <Image
        src={image || "/placeholder.svg"}
        alt={`Issue ${issueNumber}: ${title}`}
        width={300}
        height={400}
        className="w-full h-64 object-cover rounded-md mb-4 border border-gray-700"
      />
      <h3 className="text-2xl font-bold text-yellow-400">
        Issue #{issueNumber}: {title}
      </h3>
      <p className="mt-2 text-gray-400 flex-grow">{description}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4 px-6 py-2 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-full transition-all duration-300 transform hover:scale-105">
            <Download className="w-5 h-5 mr-2" />
            Read Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border border-gray-700 p-6 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-yellow-400">
              Issue #{issueNumber}: {title}
            </DialogTitle>
            <DialogDescription className="text-gray-400 mt-2">{description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col items-center">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Issue ${issueNumber}: ${title}`}
              width={400}
              height={550}
              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain rounded-md border border-gray-700"
            />
            <p className="mt-4 text-gray-300 text-left leading-relaxed">{fullSynopsis}</p>
          </div>
          <Button className="mt-6 w-full px-6 py-2 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-full">
            Start Reading Comic
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
