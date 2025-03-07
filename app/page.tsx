import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 py-10">
      <h1 className="text-4xl font-bold">Crunchy Numbers</h1>
      <h2 className="text-xl text-gray-600">Niche tools for finance & operations leaders</h2>
      
      <div className="mt-6">
        <Image 
          src="/calculator.svg" 
          alt="Calculator illustration" 
          width={200} 
          height={250} 
          priority
        />
      </div>
      
      <div className="mt-8 max-w-xl text-center">
        <p className="text-gray-700">
          Simplify your financial workflows with our specialized tools built for finance professionals.
        </p>
        
        <div className="mt-8">
          <Link 
            href="/friendly-gl-agent" 
            className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Friendly GL Agent
          </Link>
        </div>
      </div>
    </div>
  );
}
