import Link from "next/link";

export default function TruthinessProject() {
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
              Truthiness
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered fact-checking and source verification tool for the modern web
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
          <span>Information Verification</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Truthiness is an advanced fact-checking platform that helps users navigate the complex 
          landscape of online information. Using AI and multiple verification sources, it provides 
          real-time analysis of claims, statements, and articles to help users make informed 
          decisions about the content they consume and share.
        </p>

        <h2>Planned Features</h2>
        <ul>
          <li>Real-time fact-checking with confidence scores and source citations</li>
          <li>Browser extension for inline verification while reading</li>
          <li>Cross-reference engine checking multiple trusted sources</li>
          <li>Bias detection and alternative perspective suggestions</li>
          <li>Historical claim tracking to identify patterns of misinformation</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Truthiness will leverage natural language processing, machine learning models trained 
          on verified fact databases, and real-time web scraping to provide comprehensive 
          verification services. The platform will maintain transparency by showing its reasoning 
          process and allowing users to explore the sources behind each verification.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
        <p className="text-gray-600">
          Currently in the research and development phase, training our AI models on verified 
          fact-checking databases. We&apos;re also building partnerships with trusted news sources 
          and fact-checking organizations. Alpha version expected in late 2025.
        </p>
      </div>
    </div>
  );
}