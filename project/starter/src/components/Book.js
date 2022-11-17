import React from "react";
import ShelfPicker from "./ShelfPicker"
import PropTypes from 'prop-types'
import sampleImage from './sample.jpg'

export default function Book({ book, updateBook, shelves }) {
    
    Book.propTypes = {
      book: PropTypes.object.isRequired,
      shelves: PropTypes.array.isRequired,
      updateBook: PropTypes.func.isRequired
    };

    // handle missing thumbnails
    const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : sampleImage

    // handle missing titles
    const bookTitle = book.title ? book.title : "Untitled"

    return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ backgroundImage: `url(${bookCover})`}} />
                  <ShelfPicker updateBook={updateBook} book={book} shelves={shelves} />
                </div>
                <div className="book-title">{bookTitle}</div>
                { book.authors &&
                    book.authors.map((author, index) => (<div className="book-authors" key={index}>{author}</div>
                ))}
              </div>
            </li>
          )
}

