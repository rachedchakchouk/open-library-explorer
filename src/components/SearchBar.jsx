'use client'

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search books..."
      className="border p-2 w-full rounded"
      aria-label="Search books"
    />
  )
}
