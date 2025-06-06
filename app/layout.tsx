import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gary Gurevich",
  description: "Finance + Ops leader. Inventor. Idealist (by choice)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700">
                crunchy tools
              </Link>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Projects
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer with legal links for Friendly GL Agent */}
        <footer className="bg-white border-t border-gray-200 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center text-sm gap-6 text-gray-500">
              <Link href="/friendly-gl-agent/launch" className="hover:text-gray-700">
                Launch Friendly GL Agent
              </Link>
              <Link href="/friendly-gl-agent/disconnect" className="hover:text-gray-700">
                Disconnect Friendly GL Agent
              </Link>
              <Link href="/friendly-gl-agent/terms" className="hover:text-gray-700">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:text-gray-700">
                Privacy Policy
              </Link>
            </div>
            <div className="text-center text-sm text-gray-400 mt-4">
              © {new Date().getFullYear()} Gary Gurevich
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}