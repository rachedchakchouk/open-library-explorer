'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import BookCard from '@/components/BookCard'

export default function HomePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q') || ''

  const [query, setQuery] = useState(queryParam)
  const [debouncedQuery, setDebouncedQuery] = useState(queryParam) // debounce
  const [books, setBooks] = useState([])
  const [allResults, setAllResults] = useState([])
  const [visibleCount, setVisibleCount] = useState(9)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Debounce : met à jour debouncedQuery 500ms après que query ait changé
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)
    return () => clearTimeout(handler)
  }, [query])

  // fetch API quand debouncedQuery change
  useEffect(() => {
    if (!debouncedQuery) {
      setBooks([])
      setAllResults([])
      setError(null)
      setVisibleCount(9)
      return
    }

    async function fetchBooks() {
      setLoading(true)
      setError(null)
      setVisibleCount(9)

      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(debouncedQuery)}`)
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        if (!data.docs || data.docs.length === 0) {
          setError('Aucun résultat trouvé.')
          setBooks([])
          setAllResults([])
        } else {
          setAllResults(data.docs)
          setBooks(data.docs.slice(0, 9))
        }
      } catch (err) {
        setError('Erreur réseau ou serveur.')
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()

    router.replace(`/?q=${encodeURIComponent(debouncedQuery)}`, undefined, { shallow: true })
  }, [debouncedQuery, router])

  const handleLoadMore = () => {
    const newCount = visibleCount + 9
    setVisibleCount(newCount)
    setBooks(allResults.slice(0, newCount))
  }

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Open Library Explorer</h1>
      <SearchBar query={query} setQuery={setQuery} />

      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>

      {!loading && books.length < allResults.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Charger plus
          </button>
        </div>
      )}

      {books.length > 0 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          title="Retour en haut"
        >
          ⬆
        </button>
      )}
    </main>
  )
}
