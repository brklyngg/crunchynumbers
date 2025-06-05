import Link from "next/link";

export default function TipCalculatorProject() {
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
              Tip Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Smart tipping calculator with bill splitting and international currency support
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
          <span>Utility App</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Tip Calculator reimagines the simple act of calculating tips with a feature-rich 
          application that handles complex dining scenarios. From splitting bills among groups 
          with different payment preferences to understanding tipping customs in different 
          countries, this app makes end-of-meal calculations effortless.
        </p>

        <h2>Planned Features</h2>
        <ul>
          <li>Intelligent bill splitting with individual item assignment</li>
          <li>Location-aware tipping suggestions based on local customs</li>
          <li>Multiple currency support with real-time conversion</li>
          <li>Receipt scanning for automatic itemization</li>
          <li>Payment app integration for seamless group payments</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          The Tip Calculator will feature OCR technology for receipt scanning, integration with 
          currency exchange APIs, and a sophisticated calculation engine that handles complex 
          splitting scenarios. The app will also include a database of international tipping 
          customs to help travelers navigate different cultural expectations.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
        <p className="text-gray-600">
          Currently building the core calculation engine and designing the user interface. 
          The receipt scanning feature is in active development, with initial release planned 
          for early 2025.
        </p>
      </div>
    </div>
  );
}