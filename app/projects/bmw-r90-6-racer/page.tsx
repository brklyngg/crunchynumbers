import Link from "next/link";

export default function BMWRacerProject() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Navigation */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to projects
      </Link>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              BMW R90/6 Street Racer
            </h1>
            <p className="text-xl text-gray-600">
              Classic airhead café racer conversion with modern performance
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>In development</span>
          <span>•</span>
          <span>Phase 1 of 5</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <h2>What</h2>
        <p>
          A comprehensive transformation of a 1974 BMW R90/6 into a modern street racer.
          This project combines the classic airhead twin character with contemporary
          performance upgrades—Brembo brakes, Ignition Motorcycles components,
          rearset footpegs, and a complete electrical modernization with the M-Unit system.
        </p>

        <h2>The Build</h2>
        <p>
          Five carefully planned phases transform the bike while maintaining rideability
          throughout the build:
        </p>

        <ul>
          <li><strong>Phase 1:</strong> Rear end modernization with Ignition subframe,
          custom seat, and rear disc brake conversion</li>
          <li><strong>Phase 2:</strong> Complete electrical upgrade with Ignition M-Unit,
          electronic ignition, and keyless start</li>
          <li><strong>Phase 3:</strong> Brembo front brake upgrade and café racer cockpit
          with clip-ons and MotoGadget instruments</li>
          <li><strong>Phase 4:</strong> Rearset footpegs for proper ergonomics and
          Ignition exhaust system</li>
          <li><strong>Phase 5:</strong> Final aesthetics, custom paint, and performance
          tuning</li>
        </ul>

        <h2>The Philosophy</h2>
        <p>
          This build preserves the bike&apos;s authentic character—keeping the original
          1.85 B 19 front and 2.15 B 18 rear wheels—while upgrading every system
          for modern reliability and performance. It&apos;s about respecting the airhead&apos;s
          heritage while making it a capable street racer for today&apos;s roads.
        </p>

        <h2>The Details</h2>
        <p>
          Total investment of approximately $24,000 over 13-17 weeks. Key components
          include Brembo brake systems, Ignition Motorcycles subframe and exhaust,
          MotoGadget electronics with NFC keyless ignition, YSS suspension, and
          custom fabricated rearsets. The result: a unique blend of 1970s BMW
          engineering and 2020s technology.
        </p>

        <h2>Current Status</h2>
        <p>
          Planning complete. Parts sourcing and Phase 1 preparation underway. Follow
          along as this classic airhead transforms into a modern street racer.
        </p>
      </div>

      {/* Build Specifications */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Specifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Donor Bike</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Year:</span> 1974</li>
              <li><span className="font-medium">Model:</span> BMW R90/6</li>
              <li><span className="font-medium">Engine:</span> 898cc boxer twin</li>
              <li><span className="font-medium">Power:</span> 60hp @ 6,500 rpm</li>
              <li><span className="font-medium">Weight:</span> 210kg (462 lbs)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Key Upgrades</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Brembo front & rear brake systems</li>
              <li>Ignition Motorcycles subframe & exhaust</li>
              <li>M-Unit electrical system with NFC keyless</li>
              <li>Custom fabricated rearset footpegs</li>
              <li>MotoGadget digital instruments</li>
              <li>YSS rear suspension</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Timeline</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Total Duration:</span> 13-17 weeks</li>
              <li><span className="font-medium">Labor Hours:</span> 103 hours</li>
              <li><span className="font-medium">Phases:</span> 5 progressive stages</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Investment</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Parts:</span> $9,910</li>
              <li><span className="font-medium">Labor:</span> $5,150 (professional)</li>
              <li><span className="font-medium">Donor Bike:</span> $8,900</li>
              <li><span className="font-medium">Total:</span> $23,960</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Build Progress */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Progress</h2>

        <div className="space-y-4">
          {[
            { phase: 1, title: "Rear End & Subframe", status: "pending", progress: 0 },
            { phase: 2, title: "Electrical System M-Unit", status: "pending", progress: 0 },
            { phase: 3, title: "Front Brakes & Cockpit", status: "pending", progress: 0 },
            { phase: 4, title: "Rearsets & Exhaust", status: "pending", progress: 0 },
            { phase: 5, title: "Final Aesthetics", status: "pending", progress: 0 },
          ].map((item) => (
            <div key={item.phase} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-gray-400">
                    {item.phase}
                  </span>
                  <span className="font-semibold text-gray-900">
                    {item.title}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  item.status === 'completed' ? 'bg-green-100 text-green-800' :
                  item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.status === 'completed' ? 'Completed' :
                   item.status === 'in-progress' ? 'In Progress' :
                   'Pending'}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Section - Placeholder for future */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Gallery</h2>
        <div className="bg-gray-100 rounded-lg p-12 text-center text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Build photos coming soon</p>
        </div>
      </div>
    </div>
  );
}
