import Link from 'next/link'

type Props = {
  results: Product[]
}
export default function Results({ results }: Props) {
  return (
    <div className="grid w-full gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {results.map((result, index) => (
        <Link
          key={index}
          href={result.productUrl ? result.productUrl : ''}
          target={result.productUrl ? "_blank" : ''}
          className="flex w-full flex-col space-x-4 rounded-lg bg-white p-5 shadow-md"
        >
          <div className="flex flex-1 flex-col py-5">
            <p className="font-bold">{result.title}</p>
            <p className="text-sm text-slate-500">{result.location}</p>
            <p className="mt-auto flex flex-1 justify-end space-x-2 pt-2 text-xl font-bold text-cyan-500/50">
              {result.price?.toLocaleString('fr-FR')} euros
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
