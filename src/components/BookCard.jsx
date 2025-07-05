import Link from 'next/link'

export default function BookCard({ book }) {
  return (
    <Link href={`/book${book.key}`}>
<div
  key={book.key}
  className="p-4 border rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 flex flex-col items-center"
>
  <img
    src={book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'}
    alt={book.title}
    className="mb-3 w-32 h-48 object-cover rounded"
  />
  <div className="w-full max-w-xs">
    <h2 className="truncate text-lg font-semibold text-center  ">{book.title}</h2>
  </div>
  
<div className="w-full max-w-xs">
  <p className="truncate text-sm text-center italic text-gray-600">
    {book.author_name?.join(', ') || 'Auteur inconnu'}
  </p>
</div>
  <p className="text-gray-500 text-sm">{book.first_publish_year}</p>
</div>
    </Link>
  )
}
