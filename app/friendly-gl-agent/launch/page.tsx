import Link from "next/link";

export default function Launch() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Launch Friendly GL Agent</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Connect to QuickBooks</h2>
            <p className="text-gray-800 mb-6 text-lg">
              Friendly GL Agent securely connects to your QuickBooks Online account to help you analyze and 
              manage your general ledger data more effectively. This integration is powered by Intuit&apos;s 
              secure OAuth 2.0 protocol.
            </p>
            <p className="text-gray-800 mb-6">
              By connecting your accounting data, you&apos;ll be able to:
            </p>
            <ul className="list-disc pl-8 text-gray-800 space-y-2 mb-6">
              <li>Automatically import and categorize transactions</li>
              <li>Generate custom financial reports and insights</li>
              <li>Identify trends and anomalies in your financial data</li>
              <li>Streamline your month-end closing process</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M6 8h.01M9 8h.01"></path>
                <path d="M12 8h.01M15 8h.01"></path>
                <path d="M18 8h.01M6 12h.01"></path>
                <path d="M9 12h.01M12 12h.01"></path>
                <path d="M15 12h.01M18 12h.01"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-100 p-6 rounded-md border border-blue-200 mb-8">
          <h3 className="font-medium text-blue-900 mb-4 text-lg">Connection Process:</h3>
          <ul className="list-disc pl-8 text-blue-900 space-y-3">
            <li>Click the &quot;Connect to QuickBooks&quot; button below</li>
            <li>Sign in to your QuickBooks Online account when prompted</li>
            <li>Review and authorize the permissions requested</li>
            <li>You&apos;ll be redirected back to Crunchy Numbers to start using Friendly GL Agent</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-md border border-gray-200 mb-8">
          <h3 className="font-medium text-gray-900 mb-4">Data Security</h3>
          <p className="text-gray-800 mb-2">
            We take your data security seriously. Your connection is:
          </p>
          <ul className="list-disc pl-8 text-gray-800 space-y-2">
            <li><strong>Secure:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Read-only by default:</strong> We only access the data you authorize</li>
            <li><strong>Revocable:</strong> You can disconnect at any time</li>
          </ul>
          <p className="text-gray-800 mt-4 text-sm">
            By proceeding, you agree to our{" "}
            <Link href="/friendly-gl-agent/terms" className="text-blue-700 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-blue-700 hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="/api/connect-accounting"
            className="inline-block px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-lg font-medium"
          >
            Connect to QuickBooks
          </a>
        </div>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/friendly-gl-agent" 
          className="text-blue-700 hover:underline inline-flex items-center"
        >
          <span className="mr-2">←</span> Back to Friendly GL Agent
        </Link>
      </div>
    </div>
  );
} 