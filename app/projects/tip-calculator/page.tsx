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
              Just the Tip Calculator
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered tip calculator that splits bills and handles any dining scenario
            </p>
          </div>
          <Link 
            href="https://chatgpt.com/g/g-Vyi6ogfWP-just-the-tip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Try GPT
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>Live on ChatGPT</span>
          <span>•</span>
          <span>Custom GPT</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Just the Tip is a custom ChatGPT that makes calculating tips and splitting bills 
          effortless. Simply tell it your bill amount, desired tip percentage, and how many 
          people are splitting, and it handles all the math instantly. Perfect for group 
          dinners, quick calculations, or understanding tipping customs.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Instant tip calculations with customizable percentages</li>
          <li>Smart bill splitting for groups of any size</li>
          <li>Handles complex scenarios like different tip amounts per person</li>
          <li>Provides tipping etiquette advice for different situations</li>
          <li>Natural language interface - just describe your situation</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          As a custom GPT, Just the Tip uses natural language processing to understand your 
          dining scenario and provide accurate calculations. You can ask questions like 
          &quot;Split $120 between 4 people with 20% tip&quot; or &quot;What&apos;s appropriate 
          tip for coffee shop?&quot; and get instant, helpful responses.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Try It Out</h3>
        <p className="text-gray-600 mb-4">
          Just the Tip is available now as a custom GPT. Start calculating tips the easy way!
        </p>
        <Link 
          href="https://chatgpt.com/g/g-Vyi6ogfWP-just-the-tip" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Open Just the Tip Calculator →
        </Link>
      </div>
    </div>
  );
}