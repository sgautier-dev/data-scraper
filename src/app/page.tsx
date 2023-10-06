import Image from 'next/image'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-cyan-700/30" />
      <h1 className="mb-5 mt-2 text-3xl font-bold">Web Data Scraper</h1>
    </div>
  )
}
