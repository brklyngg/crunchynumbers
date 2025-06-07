import Link from "next/link";

export default function ScenicRouteProject() {
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
              Scenic Route
            </h1>
            <p className="text-xl text-gray-600">
              Find twisty roads. Avoid highways.
            </p>
          </div>
          <Link 
            href="https://scenic-route.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Use it
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
          Motorcycle routes. Curves preferred.
        </p>

        <h2>How</h2>
        <p>
          Pick start. Pick end. Get twisties.
        </p>
      </div>
    </div>
  );
}