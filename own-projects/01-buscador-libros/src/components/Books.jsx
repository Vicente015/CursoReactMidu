// import Balancer from 'react-wrap-balancer'

export function Tag ({ name }) {
  return (
    <li className='
      flex flex-row items-center gap-1 px-2 py-1
      bg-neutral-300 rounded-lg
      hover:bg-opacity-60 cursor-pointer
      '
    >
      <span className='text-neutral-700 text-sm'>🏷</span>
      <p className='text-sm font-medium text-neutral-700'>{name}</p>
    </li>
  )
}

export function BookCard ({ book }) {
  return (
    <article
      className='
        grid gap-2
        bg-neutral-200
        p-0 m-0 rounded-lg
        hover:outline-2 hover:outline-none hover:outline-blue-400
        hover:bg-opacity-60 cursor-pointer
      '
      style={{
        gridTemplateColumns: 'minmax(auto, 50%) 1fr'
      }}
    >
      <section className='border-r-2 border-r-neutral-300 h-full'>
        <img className='w-full h-full rounded-l-xl' src={book.coverImage} alt={`${book.title} Book Cover Image`} />
      </section>
      <section className='book-info py-2 pr-2 flex flex-col'>
        <h3 className='text-lg font-semibold text-neutral-800 text-ellipsis line-clamp-5'>{book.title}</h3>
        <p className='text-base font-normal text-neutral-800 text-ellipsis line-clamp-2'>{book.author}</p>
        <ul className='flex flex-row gap-4 my-2'>
          <Tag name='Tag' />
        </ul>
        <small className='text-neutral-700 text-xs font-mono self-end mt-auto'>💿 {book.downloadCount}</small>
      </section>
    </article>
  )
}

export function ListOfBooks ({ books }) {
  return (
    <ul
      className='
        grid gap-4 mt-8
        sm:grid-cols-[repeat(1,_minmax(200px,_1fr))]
        md:grid-cols-[repeat(2,_minmax(200px,_1fr))]
        lg:grid-cols-[repeat(4,_minmax(200px,_1fr))]
      '
      style={{
        gridAutoRows: 'minmax(0, 1fr)' // ? hace que todas las columnas tengan mismo tamaño
      }}
    >
      {
        books.map(book => (
          <BookCard book={book} key={book.id} />
        ))
      }
    </ul>
  )
}

export function NoBooks () {
  return (
    <p>No hay resultados.</p>
  )
}

export default function Books ({ books }) {
  return (
    books && books.length > 0
      ? <ListOfBooks books={books} />
      : <NoBooks />
  )
}
