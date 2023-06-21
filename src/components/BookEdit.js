import React from 'react'
import { useState } from 'react'
import useBooksContext from '../use-book-context'

export const BookEdit = ({ book, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(book.title)
  const { editBookById } = useBooksContext()

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
