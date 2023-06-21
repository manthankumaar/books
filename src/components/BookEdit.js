import React from 'react'
import { useState, useContext } from 'react'
import BooksContext from '../Context/Books'

export const BookEdit = ({ book, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(book.title)
  const { editBookById } = useContext(BooksContext)

  const handleSave = (event) => {
    event.preventDefault()
    onSubmit()
    editBookById(book.id, newTitle)
  }

  const handleChange = (event) => {
    setNewTitle(event.target.value)
  }

  return (
    <div>
      <form className='book-edit' onSubmit={handleSave}>
        <label>Title</label>
        <input className='input' onChange={handleChange} value={newTitle} />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  )
}
