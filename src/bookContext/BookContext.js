import React, { createContext, useReducer} from 'react'
import { bookReducer } from '../reducer/bookReducer'


export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [])

    return(
        <BookContextProvider value={books, dispatch}>
            {props.children}
        </BookContextProvider>
    )
}

export default BookContextProvider
