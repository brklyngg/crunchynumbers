import Link from "next/link";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Friendly GL Agent Terms of Service</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold mb-6">End User License Agreement</h2>
          <p className="mb-6">
            This End User License Agreement (&quot;Agreement&quot;) is a legal document that governs your use
            of the Friendly GL Agent software application (&quot;Software&quot;), provided by Crunchy Numbers.
            Last updated: March 7, 2025.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">1. Grant of License</h3>
          <p className="mb-6">
            Subject to the terms of this Agreement, Crunchy Numbers grants you a limited, non-exclusive,
            non-transferable license to use the Software in accordance with its documentation. This license
            is for your internal business purposes only and may not be sublicensed or transferred to any
            third party without our prior written consent.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">2. Connection to Accounting Systems</h3>
          <p className="mb-6">
            The Software enables connection to third-party accounting systems, including Intuit QuickBooks.
            You are responsible for ensuring that your use of the Software with such systems complies with
            any applicable terms of service for those systems. By using our QuickBooks integration, you
            acknowledge and agree to the following:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>You have authorized Crunchy Numbers to access your QuickBooks data through Intuit&apos;s API</li>
            <li>You understand that this connection can be revoked by you at any time</li>
            <li>You are responsible for maintaining the confidentiality of your QuickBooks credentials</li>
            <li>Crunchy Numbers is not affiliated with or endorsed by Intuit Inc.</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-8 mb-4">3. Data Privacy and Security</h3>
          <p className="mb-6">
            Your use of the Software is also governed by our Privacy Policy, which can be found at{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>. We implement industry-standard security measures to protect your data, but no method
            of transmission or storage is 100% secure. You acknowledge this risk when using our Software.
          </p>
          <p className="mb-6">
            We will only access, use, and store the minimum amount of data necessary to provide the
            Software&apos;s functionality. We will not sell your data to third parties or use it for purposes
            beyond those specified in our Privacy Policy without your explicit consent.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">4. Limitations and Restrictions</h3>
          <p className="mb-4">
            You may not:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Modify, reverse engineer, decompile, or create derivative works based on the Software</li>
            <li>Use the Software for any illegal purpose or in violation of applicable laws</li>
            <li>Transfer, sublicense, or provide access to the Software to any third party</li>
            <li>Remove or alter any proprietary notices or labels on the Software</li>
            <li>Use the Software in a manner that exceeds reasonable usage limits or creates an unreasonable burden on our infrastructure</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-8 mb-4">5. Termination</h3>
          <p className="mb-6">
            This license is effective until terminated. You may terminate it at any time by disconnecting
            the Software and ceasing all use. Crunchy Numbers may terminate it if you fail to comply
            with any term of this Agreement. Upon termination, you must cease all use of the Software
            and destroy all copies in your possession.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">6. Disclaimer of Warranties</h3>
          <p className="mb-6">
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, OR NON-INFRINGEMENT. CRUNCHY NUMBERS DOES NOT WARRANT THAT THE SOFTWARE
            WILL MEET YOUR REQUIREMENTS OR THAT THE OPERATION OF THE SOFTWARE WILL BE UNINTERRUPTED OR
            ERROR-FREE.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">7. Limitation of Liability</h3>
          <p className="mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CRUNCHY NUMBERS BE
            LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING,
            WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF
            BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE OF OR INABILITY
            TO USE THE SOFTWARE, EVEN IF CRUNCHY NUMBERS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">8. Governing Law</h3>
          <p className="mb-6">
            This Agreement shall be governed by and construed in accordance with the laws of the State
            of California, without giving effect to any principles of conflicts of law. Any dispute
            arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction
            of the courts located in San Francisco County, California.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-4">9. Contact Information</h3>
          <p className="mb-6">
            If you have any questions about this Agreement, please contact us at{" "}
            <a href="mailto:legal@crunchy.tools" className="text-blue-600 hover:underline">
              legal@crunchy.tools
            </a>.
          </p>
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