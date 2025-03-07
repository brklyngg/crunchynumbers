import Link from "next/link";

export default function Disconnect() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Disconnect Friendly GL Agent</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Remove QuickBooks Connection</h2>
        
        <p className="text-gray-700 mb-6 text-lg">
          You are about to disconnect your QuickBooks Online account from Friendly GL Agent. This action will:
        </p>
        
        <div className="bg-amber-50 p-6 rounded-md border border-amber-200 mb-8">
          <h3 className="font-medium text-amber-800 mb-4 text-lg">What happens when you disconnect:</h3>
          <ul className="list-disc pl-8 text-amber-700 space-y-3">
            <li>Your OAuth connection to QuickBooks will be revoked</li>
            <li>Friendly GL Agent will no longer have access to your QuickBooks data</li>
            <li>Any cached data will be deleted from our servers within 30 days</li>
            <li>Reports and analyses you've already generated will remain available</li>
            <li>You can reconnect your account at any time</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-md border border-gray-200 mb-8">
          <h3 className="font-medium text-gray-800 mb-4">Additional Information</h3>
          <p className="text-gray-700 mb-4">
            Disconnecting your account does not delete your Crunchy Numbers account or any reports you've already generated. 
            It only removes the connection between Friendly GL Agent and your QuickBooks Online account.
          </p>
          <p className="text-gray-700 mb-4">
            If you're experiencing issues with your connection, you might want to try reconnecting instead of disconnecting. 
            Please contact our support team if you need assistance.
          </p>
          <p className="text-gray-700 text-sm">
            For more information about how we handle your data after disconnection, please refer to our{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/api/disconnect-accounting"
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-center font-medium"
          >
            Disconnect from QuickBooks
          </a>
          
          <Link 
            href="/friendly-gl-agent" 
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
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