import Image from 'next/image'

export default function BookDetails({ book }) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">{book.title}</h1>

      {book.covers?.[0] ? (
        <Image
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
          width={300}
          height={450}
          className="mb-8 shadow-lg rounded"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
          alt="No cover available"
          className="mb-8 shadow-lg rounded w-[300px] h-[450px] object-cover"
        />
      )}

      <p className="mb-6 whitespace-pre-line">
        {typeof book.description === 'string'
          ? book.description
          : book.description?.value || 'No description available'}
      </p>

      <p className="mb-2">
        <strong>Subjects:</strong>{' '}
        {book.subjects ? book.subjects.join(', ') : 'N/A'}
      </p>

      <p>
        <strong>Author(s):</strong>{' '}
        {book.authors
          ? book.authors
              .map((a) => a.author?.key.replace('/authors/', '') || 'Unknown')
              .join(', ')
          : 'Unknown'}
      </p>
    </>
  )
}
