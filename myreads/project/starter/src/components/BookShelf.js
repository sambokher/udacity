import Book from "./Book";

export default function BookShelf({
  shelf, 
  shelfBooks, 
  updateBook, 
  shelves
  }) {


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