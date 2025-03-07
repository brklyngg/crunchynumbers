import Link from "next/link";

export default function FriendlyGLAgent() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Friendly GL Agent</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <p className="text-gray-700 mb-4">
          Connect your accounting data seamlessly with Friendly GL Agent. This tool helps finance professionals
          analyze and manage general ledger data with ease.
        </p>
        
        <div className="flex space-x-4 mt-6">
          <Link 
            href="/friendly-gl-agent/launch" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Launch
          </Link>
          <Link 
            href="/friendly-gl-agent/disconnect" 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Disconnect
          </Link>
        </div>
      </div>
      
      {/* Intuit Required URLs Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold mb-4">Intuit Integration URLs</h2>
        <p className="text-gray-700 mb-4">
          The following URLs are used for Intuit Developer App Store integration:
        </p>
        
        <div className="space-y-3 mt-4">
          <div>
            <h3 className="font-medium">Launch URL:</h3>
            <p className="text-blue-600">https://crunchy.tools/friendly-gl-agent/launch</p>
          </div>
          
          <div>
            <h3 className="font-medium">Disconnect URL:</h3>
            <p className="text-blue-600">https://crunchy.tools/friendly-gl-agent/disconnect</p>
          </div>
          
          <div>
            <h3 className="font-medium">End-User License Agreement (EULA):</h3>
            <p className="text-blue-600">https://crunchy.tools/friendly-gl-agent/terms</p>
          </div>
          
          <div>
            <h3 className="font-medium">Privacy Policy:</h3>
            <p className="text-blue-600">https://crunchy.tools/privacy-policy</p>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        <p className="mb-2">
          By using this tool, you agree to our{" "}
          <Link href="/friendly-gl-agent/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>
          {" "}and{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
} 