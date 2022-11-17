import React from "react";
import PropTypes from 'prop-types';

export default function ShelfPicker ({updateBook, book, shelves}) {
    
    ShelfPicker.propTypes = {
        updateBook: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired,
        shelves: PropTypes.array.isRequired
    }

    function handleSelection(event) {updateBook(book, event.target.value)}
    
    
    return (
        <div>
        <div className="book-shelf-changer">
            <select onChange={handleSelection} defaultValue={book.shelf ? book.shelf : "none"}>
                <option value="none" disabled>
                    Move to...
                </option>
                { shelves.map((shelf) => {
                    return (
                        <option value={shelf[0]} key={shelf[0]}>
                                {shelf[1]}
                        </option>
                    )
                })}
                { book.shelf && <option value="none">Remove</option> }
            </select>
        </div>
        </div>
    );
}