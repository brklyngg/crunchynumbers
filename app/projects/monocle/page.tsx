import Link from "next/link";

export default function MonocleProject() {
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
              Monocle
            </h1>
            <p className="text-xl text-gray-600">
              See in the dark. Don&apos;t wake the baby.
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
          <span>For new dads</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Problem</h2>
        <p>
          3 AM. Baby sleeping. Room dark. Dog on floor.
        </p>

        <h2>Solution</h2>
        <p>
          Night vision. One eye. Hands free.
        </p>
      </div>
    </div>
  );
}