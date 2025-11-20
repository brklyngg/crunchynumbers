import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full">
          <Image
            src="/gary-childhood.jpg"
            alt="Gary Gurevich"
            width={128}
            height={128}
            className="object-cover object-center scale-125"
            style={{ objectPosition: '50% 40%' }}
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Gary Gurevich
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Finance + Ops leader. Inventor. Idealist (by choice)
        </p>
      </div>

      <div className="prose prose-lg text-gray-700 mb-12">
        <p>
          I love building stuff that&apos;s either useful or funny. Ideally, both. Most of my projects involve Google Sheets.
        </p>
        <p>
          I&apos;ve partnered up with my former sensei (<Link href="https://www.linkedin.com/in/pdleahy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Pat Leahy</Link>) and an overpowered wizard (<Link href="https://www.linkedin.com/in/jasoncohen4/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Jason Cohen</Link>) to build THE finance team for startups: <Link href="https://www.flowocity.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Flowocity</Link>.
        </p>
        <p>
          Building is my small way of making a dent in the universe. This website is where I share new creations. For you, for me, and for posterity.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect</h2>
        <div className="flex space-x-6">
          <Link
            href="https://www.linkedin.com/in/ggurevich/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            LinkedIn
          </Link>
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
        </div>
      </div>
    </div>
  );
}