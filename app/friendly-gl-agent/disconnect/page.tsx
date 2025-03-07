import Link from "next/link";

export default function Disconnect() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Disconnect Friendly GL Agent</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <p className="text-gray-700 mb-6">
          You are about to disconnect your accounting data from Friendly GL Agent. This will remove all
          authentication credentials from our system.
        </p>
        
        <div className="bg-amber-50 p-4 rounded-md border border-amber-200 mb-6">
          <h3 className="font-medium text-amber-800 mb-2">What happens next:</h3>
          <ul className="list-disc pl-5 text-amber-700 space-y-1">
            <li>Your connection to the accounting system will be removed</li>
            <li>Data that has already been processed will remain available</li>
            <li>You can reconnect at any time</li>
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <button 
            className="px-5 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Disconnect
          </button>
          
          <Link 
            href="/friendly-gl-agent" 
            className="px-5 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          href="/friendly-gl-agent" 
          className="text-blue-600 hover:underline"
        >
          ← Back to Friendly GL Agent
        </Link>
      </div>
    </div>
  );
} 