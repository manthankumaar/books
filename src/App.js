import React, { useEffect, useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'

const App = () => {
  const [books, setBooks] = useState([])

  /**Fetching books on first render from api */
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  /****Creating Books Array */
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    })
    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }

  /***Editing Book title****/
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })
    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, ...response.data }
      }
      return book
    })
    setBooks(updatedBooks)
  }
  /***Deleteing book */
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
      {console.log(books)};
    </div>
  )
}

export default App
