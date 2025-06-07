import Link from "next/link";

export default function HotSputSummerProject() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link 
        href="/" 
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to projects
      </Link>

      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hot Sput Summer
            </h1>
            <p className="text-xl text-gray-600">
              A cosmic summer adventure awaits
            </p>
          </div>
          <Link 
            href="https://hot-sputnik-summer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Visit
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>Live</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>What</h2>
        <p>
          Hot Sput Summer is a retro-futuristic summer experience inspired by the space age optimism of the 1950s and 60s. Think atomic age aesthetics, mid-century modern design, and that special brand of cosmic enthusiasm that launched Sputnik into orbit.
        </p>

        <h2>The Vibe</h2>
        <p>
          Picture this: summer picnics with a space-age twist. Atomic ranch parties. Mid-century cocktails under the stars. A celebration of that brief moment when the future felt infinite and rockets pointed toward utopia.
        </p>

        <h2>Join the Mission</h2>
        <p>
          Whether you&apos;re a devotee of googie architecture, a collector of atomic-era ephemera, or just someone who believes the future was cooler in the past, Hot Sput Summer is your cosmic summer destination.
        </p>
      </div>
    </div>
  );
}