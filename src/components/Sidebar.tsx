import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
	return (
		<div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-cyan-600/30 dark:border-cyan-400/30 border">
			<div className="flex flex-col items-center justify-center mb-10">
				<DocumentMagnifyingGlassIcon className="h-16 w-16 text-cyan-700" />
                <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">Data Scraper</h1>
                <h2 className="hidden md:inline text-center text-xs italic">Scraping data from the web</h2>
			</div>
			<ul>


            </ul>
		</div>
	);
}
