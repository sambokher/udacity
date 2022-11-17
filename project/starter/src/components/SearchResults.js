import Book from "./Book"
import PropTypes from 'prop-types'

export function SearchResults({ results, updateBook, shelves }) {
    
    SearchResults.propTypes = {
        results: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired,
        shelves: PropTypes.array.isRequired
    }
    
    return (
        <div>
            <div className="search-books-results">
                <ol className="books-grid">
                { results.map((book) => <Book key={book.id} book={book} updateBook={updateBook} shelves={shelves} /> )}
                </ol>
            </div>
        </div>
    )
}