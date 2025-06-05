import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <Image
          src="/gary-profile.jpg"
          alt="Gary Gurevich"
          width={120}
          height={120}
          className="rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Gary Gurevich
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Finance + Ops leader. Inventor. Idealist (by choice)
        </p>
      </div>

      <div className="prose prose-lg text-gray-700 mb-12">
        <p>
          I&apos;m Gary Gurevich—I love building things that are useful or funny (ideally both). 
          Most of my projects involve Google Sheets, because I&apos;m a finance bro. I lead 
          finance & operations @ Wyng, and I&apos;m building Flowocity as a partnership with 
          my former sensei in tech startup finance.
        </p>
        <p>
          Building is my hobby, my calling - my small way of making a dent in the universe. 
          This website is where I share new creations: for you, for me, and maybe even 
          for posterity.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Work</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Wyng</h3>
              <p className="text-gray-600">Finance + Operations Leader</p>
              <p className="text-gray-500 text-sm">Current</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">The Farmer&apos;s Dog</h3>
              <p className="text-gray-600">Finance</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Greenhouse</h3>
              <p className="text-gray-600">Finance</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Canary</h3>
              <p className="text-gray-600">Finance</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Spongecell</h3>
              <p className="text-gray-600">Finance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect</h2>
        <div className="flex space-x-6">
          <Link 
            href="https://x.com/BrklynGG" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Twitter/X
          </Link>
          <Link 
            href="https://github.com/brklyngg" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </Link>
          <Link 
            href="mailto:gurevich.gary@gmail.com"
            className="text-gray-600 hover:text-gray-900"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}