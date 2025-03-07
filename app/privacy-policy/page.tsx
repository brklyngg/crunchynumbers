import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-8">
            This Privacy Policy describes how Crunchy Numbers (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            and shares information in connection with your use of our websites and services. Last updated: March 7, 2025.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Information We Collect</h2>
          <p className="mb-4">
            When you use our tools, including Friendly GL Agent, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li><strong>Account Information:</strong> Information you provide when setting up an account, such as your name, email address, company name, and contact information.</li>
            <li><strong>Usage Data:</strong> Information about how you use our services, including log data, device information, and analytics data.</li>
            <li><strong>Financial Data:</strong> When you connect to QuickBooks or other accounting systems, we access financial data such as general ledger entries, chart of accounts, transactions, and financial reports. This data is processed according to your instructions and the permissions you grant.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">How We Use Information</h2>
          <p className="mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>To provide and maintain our services, including processing your financial data to generate insights and reports</li>
            <li>To improve and personalize your experience with our tools</li>
            <li>To communicate with you about our services, updates, and support</li>
            <li>To develop new features and services based on user needs and feedback</li>
            <li>To prevent fraud, enforce our terms, and protect our legal rights</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Intuit Data Connection</h2>
          <p className="mb-6">
            When you connect Friendly GL Agent to your QuickBooks account through Intuit&apos;s API:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>We access only the data necessary to provide our services, based on the permissions you grant</li>
            <li>Your connection is secured using OAuth 2.0 protocol, an industry-standard secure authorization method</li>
            <li>We do not store your QuickBooks login credentials</li>
            <li>You can revoke access at any time through our disconnect page or through your Intuit account</li>
            <li>We comply with Intuit&apos;s developer requirements and data handling policies</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Data Retention</h2>
          <p className="mb-6">
            We retain your data for as long as your account is active or as needed to provide you services. 
            If you disconnect your QuickBooks account, we will delete your financial data from our active 
            systems within 30 days, except for aggregated, anonymized data that cannot be used to identify you.
            We may retain certain information as required by law or for legitimate business purposes, such as
            fraud prevention and service improvement.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect the security of
            your personal information, including encryption of data in transit and at rest, access controls,
            and regular security assessments. However, please note that no method of transmission over the
            Internet or method of electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Third-Party Services</h2>
          <p className="mb-6">
            When you use Friendly GL Agent, you may connect to third-party accounting systems like QuickBooks. 
            The information collected through these connections is subject to this Privacy Policy, as well
            as any privacy policies of the connected services. We recommend reviewing Intuit&apos;s privacy policy
            to understand how they handle your data.
          </p>
          <p className="mb-6">
            We may use third-party service providers to help us operate our business and provide our services.
            These providers have access to your information only to perform specific tasks on our behalf and
            are obligated to protect your data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Your Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have certain rights regarding your personal information,
            such as:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>The right to access and receive a copy of your data</li>
            <li>The right to correct or update your data</li>
            <li>The right to delete your data (subject to certain exceptions)</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="mb-6">
            To exercise these rights, please contact us using the information provided below.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review
            this Privacy Policy periodically for any changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@crunchy.tools" className="text-blue-600 hover:underline">
              privacy@crunchy.tools
            </a>.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/" 
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
} 