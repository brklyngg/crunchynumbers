import Link from "next/link";
import Image from "next/image";

const projects = [
  // Active projects first
  {
    name: "Scenic Route",
    description: "Find twisty motorcycle routes - pick start and end points, avoid highways, get curves",
    url: "https://scenic-route.netlify.app",
    externalUrl: "https://scenic-route.netlify.app",
    isLive: true,
    logo: "/motorcycle.svg"
  },
  {
    name: "Just the Tip",
    description: "ChatGPT tip calculator - split bills and calculate tips with natural language",
    url: "https://chatgpt.com/g/g-Vyi6ogfWP-just-the-tip",
    externalUrl: "https://chatgpt.com/g/g-Vyi6ogfWP-just-the-tip",
    isLive: true,
    logo: "/calculator.svg"
  },
  {
    name: "ContextCal",
    description: "Printable wall calendar - pick any month, print 9 pages, tape together",
    url: "/projects/contextcal",
    externalUrl: "#",
    isLive: true,
    logo: "/calendar.svg"
  },
  {
    name: "Hot Sput Summer",
    description: "Retro space-age summer experience - atomic picnics and mid-century vibes",
    url: "https://hot-sputnik-summer.netlify.app/",
    externalUrl: "https://hot-sputnik-summer.netlify.app/",
    isLive: true,
    logo: "/dog.svg"
  },
  {
    name: "Alex: 40 Levels Deep",
    description: "Retro arcade game celebrating 40 years - mash buttons through decades of life",
    url: "/projects/alex40",
    externalUrl: "#",
    isLive: true,
    logo: "/alex40.svg"
  },
  {
    name: "Flowocity",
    description: "Embedded finance team for venture-backed startups - full-stack CFO, FP&A, and accounting",
    url: "https://www.flowocity.ai/",
    externalUrl: "https://www.flowocity.ai/",
    isLive: true,
    logo: "/flowocity.png"
  },
  // In-development projects
  {
    name: "BMW R90/6 Street Racer",
    description: "Classic airhead café racer conversion with modern performance upgrades",
    url: "/projects/bmw-r90-6-racer",
    externalUrl: "#",
    isLive: false,
    logo: "/airhead-racer.svg"
  },
  {
    name: "Friendly GL Agent",
    description: "Like Mickey's magic broom in Fantasia, but for Google Sheets and QuickBooks",
    url: "/projects/friendly-gl-agent",
    externalUrl: "https://friendlyglagent.com",
    isLive: false,
    logo: "/calculator.svg"
  },
  {
    name: "Monocle",
    description: "Night-vision monocle for new dads navigating dark rooms",
    url: "/projects/monocle",
    externalUrl: "#",
    isLive: false,
    logo: "/monocle.svg"
  },
  {
    name: "Old People Safety Lamp",
    description: "Smart home safety solution for seniors",
    url: "/projects/safety-lamp",
    externalUrl: "#",
    isLive: false,
    logo: "/lamp.svg"
  },
  {
    name: '"Truthiness" Evaluator',
    description: "Multiple AIs debate claims and return true/false with context",
    url: "/projects/truthiness",
    externalUrl: "#",
    isLive: false,
    logo: "/brain.svg"
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isClickable = project.isLive;
            
            if (isClickable) {
              return (
                <Link
                  key={project.name}
                  href={project.url}
                  className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md cursor-pointer transition-all duration-200"
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
                </Link>
              );
            } else {
              return (
                <div
                  key={project.name}
                  className="group block p-6 bg-white rounded-lg border border-gray-100 cursor-not-allowed opacity-75 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={24}
                        height={24}
                        className="opacity-70"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  <p className="text-gray-400 text-xs">
                    In development
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}