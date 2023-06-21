import { createContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

const BooksContext = createContext()

const Provider = ({ children }) => {
  const [books, setBooks] = useState([])

  /****************************Fetching books on first render from api *********************************************/
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  /***********************************Creating Books Array ***************************************/
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    })
    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }

  /************************************Editing Book title*****************************************/
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

  /******************************************Deleteing book *******************************************/
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  /***********************Value to be shared ***********************/
  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  }
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}

export { Provider }
export default BooksContext
