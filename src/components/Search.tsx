'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FormEvent, useRef } from 'react'

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const input = inputRef.current?.value
    if (!input) return

    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }

    try {
		// Call API to activate scraper
    } catch (e) {
		// Handle errors
	}

	// Wait for the response
  }

  return (
    <div className="">
      <form
        className="mx-auto flex max-w-md items-center justify-center space-x-2 rounded-full bg-slate-200 px-4 py-2"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Recherche..."
          className="flex-1 bg-transparent outline-none"
        />
        <button hidden>Recherche</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-cyan-700" />
      </form>
    </div>
  )
}
