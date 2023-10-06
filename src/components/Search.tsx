'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const input = inputRef.current?.value
    if (!input) return

    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }

    try {
      const response = await fetch('/api/scraper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: input }),
      })

      const { collection_id, start_eta } = await response.json()
      router.push(`/search/${collection_id}`)
    } catch (e) {
      console.log(e)
    }

    // Wait for the response
  }

  return (
    <header>
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
    </header>
  )
}
