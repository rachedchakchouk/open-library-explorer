'use client'
import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query)
    }
  }

  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Search by title or author..."
        className="p-2 border rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}
