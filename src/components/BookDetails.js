import React, {useContext} from 'react'
import { bookReducer } from "../reducer/bookReducer";


const BookDetails = ({book}) => {
    const {dispatch} = useContext(bookReducer)
    return (
        <li onClick={()=> dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className="title">{book.title}</div>
            <div className="title">{book.author}</div>
        </li>
    )
}

export default BookDetails
