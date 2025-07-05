import BookDetails from '../../../components/BookDetail'

async function getBookDetails(workId) {
  const res = await fetch(`https://openlibrary.org/works/${workId}.json`)
  if (!res.ok) throw new Error('Failed to fetch book details')
  return res.json()
}

export default async function BookPage({ params }) {
  const workId = params.id[1]

  let book
  try {
    book = await getBookDetails(workId)
  } catch {
    return <div className="p-4 text-red-600">Book not found</div>
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <BookDetails book={book} />

      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Back to Search
      </a>
    </main>
  )
}
