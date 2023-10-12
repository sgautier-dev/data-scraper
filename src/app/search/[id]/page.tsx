'use client'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../../../firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import Results from '@/components/Results'
import GridLoader from 'react-spinners/GridLoader'
import { useRouter } from 'next/navigation'

type PropsType = {
  params: {
    id: string
  }
}

export default function SearchPage({ params: { id } }: PropsType) {
  const [snapshot, loading, error] = useDocument(doc(db, 'searches', id))
  const router = useRouter()

  const handleDelete = () => {
    deleteDoc(doc(db, 'searches', id))
    router.push('/')
  }

  const deleteButton = (
    <button
      className="rounded-lg bg-cyan-700 px-4 py-2 text-white"
      onClick={handleDelete}
    >
      Supprimer la recherche
    </button>
  )

  if (loading) {
    return (
      <h1 className="animate-pulse p-10 text-center text-xl text-cyan-700/50">
        En cours de chargement...
      </h1>
    )
  }

  if (!snapshot?.exists()) return

  if (snapshot.data()?.status === 'pending') {
    return (
      <div className="flex flex-col items-center justify-between gap-y-5 py-10">
        <p className="animate-pulse text-center text-cyan-700">
          <GridLoader color="#22d3ee" size={50} aria-label="Loading Spinner" />
        </p>
        {deleteButton}
      </div>
    )
  }

  console.log('Results: ', snapshot.data()?.results)

  return (
    <div className="py-5">
      <div className="mb-7 flex items-center justify-between">
        <div className="flex flex-col gap-x-4 md:flex-row">
          <h1 className="font-bold">
            Résultats de recherche pour{' '}
            <span className="text-cyan-700"> {snapshot.data()?.search}</span>
          </h1>
          <p className="text-slate-400">
            {snapshot.data()?.results?.length > 0 &&
              `${snapshot.data()?.results?.length} résultats trouvés`}
          </p>
        </div>
        {deleteButton}
      </div>
      {snapshot.data()?.results?.length > 0 && (
        <Results results={snapshot.data()?.results} />
      )}
    </div>
  )
}
