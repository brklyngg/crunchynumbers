import Link from "next/link";

export default function SafetyLampProject() {
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
              Old People Safety Lamp
            </h1>
            <p className="text-xl text-gray-600">
              Light that knows when you fall.
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
          <span>In development</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>What</h2>
        <p>
          Smart lamp. Detects falls. Calls for help.
        </p>

        <h2>Why</h2>
        <p>
          Living alone. Peace of mind.
        </p>
      </div>
    </div>
  );
}