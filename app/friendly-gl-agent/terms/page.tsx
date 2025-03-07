import Link from "next/link";

export default function Terms() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Friendly GL Agent Terms of Service</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="prose prose-slate max-w-none">
          <h2>End User License Agreement</h2>
          <p>
            This End User License Agreement ("Agreement") is a legal document that governs your use
            of the Friendly GL Agent software application ("Software"), provided by Crunchy Numbers.
          </p>
          
          <h3>1. Grant of License</h3>
          <p>
            Subject to the terms of this Agreement, Crunchy Numbers grants you a limited, non-exclusive,
            non-transferable license to use the Software in accordance with its documentation.
          </p>
          
          <h3>2. Connection to Accounting Systems</h3>
          <p>
            The Software enables connection to third-party accounting systems. You are responsible for
            ensuring that your use of the Software with such systems complies with any applicable terms
            of service for those systems.
          </p>
          
          <h3>3. Data Privacy</h3>
          <p>
            Your use of the Software is also governed by our Privacy Policy, which can be found at 
            <Link href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
              Privacy Policy
            </Link>.
          </p>
          
          <h3>4. Limitations</h3>
          <p>
            You may not:
          </p>
          <ul>
            <li>Modify, reverse engineer, or create derivative works based on the Software</li>
            <li>Use the Software for any illegal purpose</li>
            <li>Transfer or sublicense the Software to any third party</li>
          </ul>
          
          <h3>5. Termination</h3>
          <p>
            This license is effective until terminated. You may terminate it at any time by disconnecting
            the Software and ceasing all use. Crunchy Numbers may terminate it if you fail to comply
            with any term of this Agreement.
          </p>
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