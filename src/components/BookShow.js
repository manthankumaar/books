import React, { useState } from 'react'
import { BookEdit } from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleDeleteClick = () => {
    onDelete(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }
  const handleSaveClick = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id, newTitle)
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
