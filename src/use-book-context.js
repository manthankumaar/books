import { useContext } from 'react'
import BooksContext from './Context/Books'

const useBooksContext = () => {
  return useContext(BooksContext)
}

export default useBooksContext
