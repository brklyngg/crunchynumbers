import Link from "next/link";

export default function MonocleProject() {
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
              Monocle
            </h1>
            <p className="text-xl text-gray-600">
              Night-vision monocle for dads navigating dark nurseries
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
          <span>For new dads</span>
          <span>•</span>
          <span>Smart Home</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2>Overview</h2>
        <p>
          Monocle is an innovative night-vision solution designed specifically for parents of newborns. 
          Navigate dark rooms with confidence, avoiding sleeping dogs, scattered toys, and other 
          obstacles while maintaining the peaceful darkness your baby needs for sleep. Perfect for 
          those 3 AM diaper changes and feeding sessions.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Hands-free monocle design leaves one hand free for carrying baby</li>
          <li>Infrared night vision with adjustable brightness levels</li>
          <li>Obstacle detection alerts for toys and sleeping pets</li>
          <li>Silent operation to maintain peaceful nursery environment</li>
          <li>Long battery life with USB-C charging</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Monocle combines advanced infrared imaging technology with ergonomic design principles 
          to create the perfect nighttime navigation tool for parents. The device features a 
          lightweight, comfortable head-mounted design that won&apos;t interfere with holding or 
          feeding your baby. Smart sensors help detect and highlight potential obstacles in your path.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">The Dad&apos;s Dilemma</h3>
        <p className="text-gray-600">
          Every new parent knows the struggle: baby finally asleep, room pitch black, and you need 
          to navigate a minefield of toys, furniture, and sleeping pets. One wrong step and it&apos;s 
          game over. Monocle is the solution every dad didn&apos;t know they needed.
        </p>
      </div>
    </div>
  );
}