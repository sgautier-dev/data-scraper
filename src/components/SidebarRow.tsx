'use client'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { DocumentData } from 'firebase-admin/firestore'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

type Props = {
  doc: DocumentData
}

export default function SidebarRow({ doc }: Props) {
  const router = useRouter()
  const [active, setActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    setActive(pathname.includes(doc.id))
  }, [pathname, doc.id])

  return (
    <li
      onClick={() => router.push(`/search/${doc.id}`)}
      className={`flex cursor-pointer justify-between rounded-lg p-4 hover:bg-white hover:shadow-md ${
        active && 'bg-white shadow-md'
      }`}
    >
      <div className="flex flex-col justify-center gap-1">
        <p className="md:tex-base text-xs font-bold">{doc.data().search}</p>
        {doc.data().status === 'pending' && (
          <p className="text-xs"> Scraping en cours...</p>
        )}
      </div>

      <span className="ml-2">
        {doc.data().status === 'pending' ? (
          <GridLoader color="#22d3ee" size={10} aria-label="Loading Spinner" />
        ) : (
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        )}
      </span>
    </li>
  )
}
