import Link from "next/link";

export default function FlowocityProject() {
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
              Flowocity
            </h1>
            <p className="text-xl text-gray-600">
              Partnership project delivering powerful cash flow forecasting and financial planning tools
            </p>
          </div>
          <Link 
            href="https://flowocity.com"
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
          <span>Partnership Project</span>
          <span>•</span>
          <span>Financial Planning</span>
          <span>•</span>
          <span>Cash Flow Analysis</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Flowocity is a collaborative partnership project that brings enterprise-level cash flow 
          forecasting capabilities to small and medium-sized businesses. By combining advanced 
          financial modeling with intuitive interfaces, Flowocity helps businesses make data-driven 
          decisions about their financial future.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Real-time cash flow forecasting with scenario planning</li>
          <li>Automated financial data aggregation from multiple sources</li>
          <li>Customizable dashboards and reporting tools</li>
          <li>AI-powered insights and recommendations for cash flow optimization</li>
          <li>Collaborative features for teams and financial advisors</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Developed as a partnership project, Flowocity leverages modern cloud infrastructure to 
          deliver scalable financial analysis tools. The platform integrates with major accounting 
          systems and banking APIs to provide comprehensive financial visibility while maintaining 
          bank-level security standards.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
        <p className="text-gray-600">
          This partnership project is actively maintained and continuously enhanced with new features 
          based on user feedback and market demands.
        </p>
      </div>
    </div>
  );
}