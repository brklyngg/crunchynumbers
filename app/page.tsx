import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Friendly GL Agent",
    description: "Smart assistant for QuickBooks Online",
    url: "/projects/friendly-gl-agent",
    externalUrl: "https://friendlyglagent.com",
    stats: "100+ users",
    logo: "/calculator.svg"
  },
  {
    name: "Flowocity",
    description: "Cash flow forecasting for startups",
    url: "/projects/flowocity",
    externalUrl: "https://flowocity.com",
    stats: "Partnership project",
    logo: "/globe.svg"
  },
  {
    name: "Scenic Route",
    description: "AI-powered travel itinerary generator",
    url: "/projects/scenic-route",
    externalUrl: "#",
    stats: "Coming soon",
    logo: "/globe.svg"
  },
  {
    name: "Old People Safety Lamp",
    description: "Smart home safety solution for seniors",
    url: "/projects/safety-lamp",
    externalUrl: "#",
    stats: "In development",
    logo: "/window.svg"
  },
  {
    name: "Just the Tip Calculator",
    description: "Simple, elegant tip calculator",
    url: "/projects/tip-calculator",
    externalUrl: "#",
    stats: "Mobile app",
    logo: "/calculator.svg"
  },
  {
    name: "Truthiness Evaluator",
    description: "Fact-checking tool with AI verification",
    url: "/projects/truthiness",
    externalUrl: "#",
    stats: "Beta testing",
    logo: "/file.svg"
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hey, I&apos;m Gary Gurevich
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          I love building things that are useful or funny (ideally both). 
          Most of my projects involve Google Sheets, because I&apos;m a finance bro.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
                {project.externalUrl !== "#" && (
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
              <p className="text-gray-500 text-sm">
                {project.stats}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}