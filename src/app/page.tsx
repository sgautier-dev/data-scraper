import Image from 'next/image'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <DocumentMagnifyingGlassIcon className='h-64 w-64 text-cyan-700/30' />
      <h1 className='text-3xl mt-2 text-black font-bold mb-5'>Data Scraper for the Web</h1>
    </main>
  )
}
