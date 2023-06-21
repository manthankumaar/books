import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../Context/Books'

const BookList = () => {
  const { books } = useContext(BooksContext)
  const renderBook = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })
  return <div className='book-list'>{renderBook}</div>
}

export default BookList
