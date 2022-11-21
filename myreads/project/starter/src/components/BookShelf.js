import Book from "./Book";
import PropType from 'prop-types';

export default function BookShelf({
  shelf, 
  shelfBooks, 
  updateBook, 
  shelves
  }) {

    BookShelf.propTypes = {
      shelf: PropType.string.isRequired,
      shelfBooks: PropType.array.isRequired,
      shelves: PropType.array.isRequired,
      updateBook: PropType.func.isRequired
    };

    return (
    <div>
      <div className="bookshelf">
      <h2 className="bookshelf-title">{ shelf }</h2>
      <div className="bookshelf-books">
      <ol className="books-grid">
        { shelfBooks.map((book) => {
          return <Book 
            key={book.id} 
            book={book}
            updateBook={updateBook}
            shelves={shelves}
            />
        })}
      </ol>
      </div>
      </div>        
  </div>);
}