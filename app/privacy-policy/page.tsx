import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-8">
            This Privacy Policy describes how Crunchy Numbers (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            and shares information in connection with your use of our websites and services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Information We Collect</h2>
          <p className="mb-4">
            When you use our tools, including Friendly GL Agent, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li><strong>Account Information:</strong> Information you provide when setting up an account</li>
            <li><strong>Usage Data:</strong> Information about how you use our services</li>
            <li><strong>Financial Data:</strong> Data from connected accounting systems, which is processed according to your instructions</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">How We Use Information</h2>
          <p className="mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To improve and personalize your experience</li>
            <li>To communicate with you about our services</li>
            <li>To develop new features and services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect the security of
            your personal information. However, please note that no method of transmission over the
            Internet or method of electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Third-Party Services</h2>
          <p className="mb-6">
            When you use Friendly GL Agent, you may connect to third-party accounting systems. The
            information collected through these connections is subject to this Privacy Policy, as well
            as any privacy policies of the connected services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Your Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have certain rights regarding your personal information,
            such as the right to access, correct, or delete your data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-6">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at privacy@crunchynumbers.example.com.
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