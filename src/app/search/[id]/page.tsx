'use client'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../../../firebase'
import { doc } from 'firebase/firestore'
import Results from '@/components/Results'

type PropsType = {
  params: {
    id: string
  }
}

export default function SearchPage({ params: { id } }: PropsType) {
  const [snapshot, loading, error] = useDocument(doc(db, 'searches', id))

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
          Collecte des données en cours...
        </p>
      </div>
    )
  }

  console.log("Results: ", snapshot.data()?.results)

  return (
    <div className='py-5'>
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
      </div>
      {snapshot.data()?.results?.length > 0 && (
        <Results results={snapshot.data()?.results} />
      )}
    </div>
  )
}
