import React, {useState, useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }})
        setAuthor('')
        setTitle('')
    }
    return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="book title" onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                <button type="submit">Add Book</button>
            </form>
    )
}

export default BookForm
