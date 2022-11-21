import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

export default function HomePage({shelves, library, updateBook}) {

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