import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import { useState, useEffect } from 'react';
import * as BooksAPI from "../utilities/BooksAPI";

export default function HomePage({shelves}) {
    
    const [ library, setLibrary] = useState([])
    
    // call to get all books in the library
    useEffect(() => {BooksAPI.getAll().then(response => setLibrary(response))},[])

    function updateBook(book, newShelf) {
        
        // call API
        BooksAPI.update(book, newShelf).then(response => {console.log(response)})

        // create a new library array with updated shelves
        const newLibrary = library.map(item => {
            // loop over the books, find the one to update, change the shelf
            if (item.id === book.id) {return {...item, shelf: newShelf};}
            return item;
        });
        setLibrary(newLibrary)

    }

    return (
    <div>
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                { shelves.map((shelf) => {
                    return <BookShelf 
                        key={shelf[0]}    
                        shelf={shelf[1]}
                        shelfBooks={library.filter(book => book.shelf === shelf[0])}
                        updateBook={updateBook}
                        shelves={shelves}
                        />
                })}
                
            </div>
        <Link className="open-search" to="/search">Add Book</Link>
        </div>
    </div>
    )
}