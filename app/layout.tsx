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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="bg-gray-100 w-64 p-6 flex flex-col">
            <Link href="/" className="text-xl font-semibold mb-6">Crunchy Numbers</Link>
            <nav className="space-y-2">
              <Link href="/friendly-gl-agent" className="block p-2 hover:bg-gray-200 rounded">
                Friendly GL Agent
              </Link>
              {/* More tools can be added here */}
            </nav>
          </aside>
          
          {/* Main content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
        
        {/* Footer with legal links */}
        <footer className="bg-gray-100 py-4 px-6 border-t border-gray-200">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center text-sm text-gray-600 gap-6">
              <Link href="/friendly-gl-agent/launch" className="hover:underline">
                Launch Friendly GL Agent
              </Link>
              <Link href="/friendly-gl-agent/disconnect" className="hover:underline">
                Disconnect Friendly GL Agent
              </Link>
              <Link href="/friendly-gl-agent/terms" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
