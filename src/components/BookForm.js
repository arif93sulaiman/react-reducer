import React, {useState, useReducer, useContext} from 'react'
import { BookContext } from '../bookContext/bookContext'

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                <input type="submit">Add Book</input>
            </form>
        </div>
    )
}

export default BookForm
