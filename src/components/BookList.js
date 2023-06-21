import React from 'react'
import BookShow from './BookShow'
import useBooksContext from '../use-book-context'

const BookList = () => {
  const { books } = useBooksContext()
  const renderBook = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })
  return <div className='book-list'>{renderBook}</div>
}

export default BookList
