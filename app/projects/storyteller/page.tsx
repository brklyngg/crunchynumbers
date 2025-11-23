import Link from "next/link";

export default function StorytellerProject() {
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
              Storytime
            </h1>
            <p className="text-xl text-gray-600">
              Generate illustrated children&apos;s books with AI
            </p>
          </div>
          <a
            href="https://github.com/brklyngg/storybook-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Storytime
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>AI Story Generator</span>
          <span>•</span>
          <span>OpenAI</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>What it does</h2>
        <p>
          Turn story prompts into fully illustrated children&apos;s books. Type a theme,
          get AI-generated text and images, assembled into a multi-page storybook format.
        </p>

        <h2>How it works</h2>
        <p>
          Built with OpenAI&apos;s GPT and DALL-E APIs. Enter a story concept, the system
          generates narrative text, creates matching illustrations, and formats everything
          into a readable book layout.
        </p>

        <h2>Tech</h2>
        <ul>
          <li>OpenAI GPT for story generation</li>
          <li>DALL-E for illustrations</li>
          <li>Next.js frontend</li>
          <li>Responsive book layout</li>
        </ul>
      </div>
    </div>
  );
}
