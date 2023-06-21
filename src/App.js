import React, { useEffect } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import useBooksContext from './use-book-context'

const App = () => {
  const { fetchBooks } = useBooksContext()

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
