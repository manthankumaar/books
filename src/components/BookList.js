import React from 'react'
import BookShow from './BookShow'

const BookList = ({ books, onDelete, onEdit }) => {
  const renderBook = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    )
  })
  return <div className='book-list'>{renderBook}</div>
}

export default BookList
