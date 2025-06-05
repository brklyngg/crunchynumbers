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
              Discover beautiful drives and hidden gems along your journey
            </p>
          </div>
          <button 
            disabled
            className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>In Development</span>
          <span>•</span>
          <span>Travel & Navigation</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Scenic Route is an innovative navigation app that helps travelers discover the most 
          beautiful and interesting paths between destinations. Instead of just finding the 
          fastest route, it optimizes for scenic views, interesting landmarks, and memorable 
          experiences along the way.
        </p>

        <h2>Planned Features</h2>
        <ul>
          <li>AI-powered scenic route recommendations based on user preferences</li>
          <li>Integration with points of interest, viewpoints, and local attractions</li>
          <li>Community-driven route ratings and hidden gem discoveries</li>
          <li>Offline map support for remote scenic drives</li>
          <li>Photo opportunities and timing suggestions along routes</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Scenic Route will combine advanced mapping APIs with machine learning algorithms to 
          identify and rank scenic routes. The platform will analyze factors such as elevation 
          changes, proximity to water features, historical significance, and user-generated 
          content to create truly memorable journey experiences.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
        <p className="text-gray-600">
          Currently in active development. We&apos;re building the core routing engine and gathering 
          scenic route data from various sources. Expected launch in 2025.
        </p>
      </div>
    </div>
  );
}