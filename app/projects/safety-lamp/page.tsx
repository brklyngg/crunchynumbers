import Link from "next/link";

export default function SafetyLampProject() {
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
              Safety Lamp
            </h1>
            <p className="text-xl text-gray-600">
              Personal safety companion app with real-time location sharing and emergency features
            </p>
          </div>
          <button 
            disabled
            className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>In Development</span>
          <span>•</span>
          <span>Personal Safety</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Safety Lamp is a comprehensive personal safety application designed to help users feel 
          secure in various situations. Whether walking alone at night, traveling to new places, 
          or simply wanting peace of mind, Safety Lamp provides intelligent safety features that 
          work seamlessly in the background.
        </p>

        <h2>Planned Features</h2>
        <ul>
          <li>One-tap emergency alerts to trusted contacts with location sharing</li>
          <li>Virtual companion mode with automated check-ins</li>
          <li>Safe route recommendations based on time of day and location data</li>
          <li>Discreet SOS activation through gesture recognition</li>
          <li>Integration with local emergency services and safety resources</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Safety Lamp will utilize advanced location services, real-time communication protocols, 
          and machine learning to provide proactive safety features. The app will prioritize user 
          privacy while ensuring rapid response capabilities in emergency situations, with all 
          data encrypted end-to-end.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
        <p className="text-gray-600">
          Currently in the design and prototyping phase. We&apos;re conducting user research to ensure 
          the app meets real-world safety needs while maintaining ease of use. Beta testing planned 
          for mid-2025.
        </p>
      </div>
    </div>
  );
}