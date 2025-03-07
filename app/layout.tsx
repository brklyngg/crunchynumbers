import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crunchy Numbers",
  description: "Niche tools for finance & operations leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="bg-gray-800 w-64 p-6 flex flex-col text-white">
            <Link href="/" className="text-xl font-semibold mb-6 text-white hover:text-blue-200">Crunchy Numbers</Link>
            <nav className="space-y-2">
              <Link href="/friendly-gl-agent" className="block p-2 hover:bg-gray-700 rounded text-gray-100">
                Friendly GL Agent
              </Link>
              {/* More tools can be added here */}
            </nav>
          </aside>
          
          {/* Main content */}
          <main className="flex-1 p-8 bg-white">
            {children}
          </main>
        </div>
        
        {/* Footer with legal links */}
        <footer className="bg-gray-800 py-4 px-6 border-t border-gray-700 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center text-sm gap-6">
              <Link href="/friendly-gl-agent/launch" className="text-gray-200 hover:text-white hover:underline">
                Launch Friendly GL Agent
              </Link>
              <Link href="/friendly-gl-agent/disconnect" className="text-gray-200 hover:text-white hover:underline">
                Disconnect Friendly GL Agent
              </Link>
              <Link href="/friendly-gl-agent/terms" className="text-gray-200 hover:text-white hover:underline">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-gray-200 hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
