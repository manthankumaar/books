import React, { useState, useContext } from 'react'
import { BookEdit } from './BookEdit'
import BooksContext from '../Context/Books'

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBookById } = useContext(BooksContext)

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }
  const handleSaveClick = (id, newTitle) => {
    setShowEdit(false)
  }
  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit onSubmit={handleSaveClick} book={book} />
  }

  return (
    <div className='book-show'>
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt='book-img'
      />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
