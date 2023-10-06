import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Sidebar() {
  return (
    <div className="overflow-y-auto border-b border-cyan-600/30 p-2 py-6 dark:border-cyan-400/30 md:p-10">
      <div className="mb-10 flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon className="h-16 w-16 text-cyan-700" />
        <h1 className="mb-2 mt-2 hidden text-center text-3xl font-bold md:inline">
          Data Scraper
        </h1>
        <h2 className="hidden text-center text-xs italic md:inline">
          Récupération de données de leboncoin
        </h2>
      </div>
      <ul></ul>
    </div>
  )
}
