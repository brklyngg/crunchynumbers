import Link from "next/link";

export default function ScenicRouteProject() {
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
              Scenic Route
            </h1>
            <p className="text-xl text-gray-600">
              Discover beautiful drives and hidden gems along your journey
            </p>
          </div>
          <Link 
            href="https://scenic-route.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Visit site
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>Live</span>
          <span>•</span>
          <span>Travel & Navigation</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Scenic Route is an AI-powered travel itinerary generator that helps travelers plan 
          perfect trips tailored to their preferences. Simply input your destination, travel 
          dates, and interests, and Scenic Route creates a comprehensive day-by-day itinerary 
          with recommendations for attractions, restaurants, and activities.
        </p>

        <h2>Features</h2>
        <ul>
          <li>AI-powered itinerary generation based on your preferences and interests</li>
          <li>Customizable trip plans with drag-and-drop scheduling</li>
          <li>Integration with popular attractions, restaurants, and activities</li>
          <li>Budget estimation and travel tips for each destination</li>
          <li>Export options for easy sharing and offline access</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Built with modern web technologies, Scenic Route leverages advanced AI models to 
          understand traveler preferences and create personalized itineraries. The platform 
          combines real-time data from various travel APIs with machine learning to suggest 
          optimal daily schedules, hidden gems, and local experiences that match your travel style.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Try It Out</h3>
        <p className="text-gray-600 mb-4">
          Scenic Route is now live! Start planning your next adventure with our AI-powered 
          itinerary generator.
        </p>
        <Link 
          href="https://scenic-route.netlify.app" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Visit Scenic Route →
        </Link>
      </div>
    </div>
  );
}