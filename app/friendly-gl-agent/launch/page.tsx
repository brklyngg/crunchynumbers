import Link from "next/link";

export default function Launch() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Launch Friendly GL Agent</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <p className="text-gray-700 mb-8 text-lg">
          You are about to connect your accounting data to Friendly GL Agent. This secure connection
          will allow you to analyze and manage your general ledger data effectively.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-md border border-blue-200 mb-8">
          <h3 className="font-medium text-blue-800 mb-4 text-lg">What happens next:</h3>
          <ul className="list-disc pl-8 text-blue-700 space-y-3">
            <li>You&apos;ll be redirected to authorize access to your accounting system</li>
            <li>Select the data you want to connect</li>
            <li>Return to Crunchy Numbers to start using Friendly GL Agent</li>
          </ul>
        </div>
        
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
        >
          Connect your GL data
        </button>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/friendly-gl-agent" 
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <span className="mr-2">←</span> Back to Friendly GL Agent
        </Link>
      </div>
    </div>
  );
} 