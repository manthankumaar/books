import React, { useEffect, useContext } from 'react'
import BookCreate from './Components/BookCreate'
import BooksContext from './Context/Books'
import BookList from './Components/BookList'

const App = () => {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
  })

  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
