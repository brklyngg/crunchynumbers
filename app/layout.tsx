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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex`}
      >
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
      </body>
    </html>
  );
}
