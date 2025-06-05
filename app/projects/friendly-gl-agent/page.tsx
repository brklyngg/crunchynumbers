import Link from "next/link";

export default function FriendlyGLAgentProject() {
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
              Friendly GL Agent
            </h1>
            <p className="text-xl text-gray-600">
              Smart assistant for QuickBooks Online that helps automate bookkeeping tasks
            </p>
          </div>
          <Link 
            href="https://friendlyglagent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Visit site
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>100+ users</span>
          <span>•</span>
          <span>QuickBooks Integration</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Friendly GL Agent is an AI-powered assistant that integrates directly with QuickBooks Online 
          to help small business owners and bookkeepers automate their accounting tasks. It uses 
          natural language processing to understand your requests and execute complex bookkeeping 
          operations automatically.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Natural language interface for QuickBooks operations</li>
          <li>Automated journal entry creation and categorization</li>
          <li>Smart expense tracking and reconciliation</li>
          <li>Real-time sync with QuickBooks Online</li>
          <li>Secure OAuth integration</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Built with Next.js and TypeScript, Friendly GL Agent leverages the QuickBooks Online API 
          for seamless integration. The AI component uses advanced language models to interpret 
          user requests and translate them into precise accounting actions.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <div className="space-y-2">
          <Link 
            href="/friendly-gl-agent" 
            className="block text-blue-600 hover:text-blue-800"
          >
            Get Started with Friendly GL Agent →
          </Link>
          <Link 
            href="/friendly-gl-agent/terms" 
            className="block text-gray-600 hover:text-gray-900"
          >
            Terms of Service
          </Link>
          <Link 
            href="/privacy-policy" 
            className="block text-gray-600 hover:text-gray-900"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}