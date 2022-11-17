import { Link } from 'react-router-dom';
import { SearchResults } from '../components/SearchResults';
import { useState } from 'react';
import * as BooksAPI from "../utilities/BooksAPI";
import PropType from 'prop-types';

export default function SearchPage({ shelves }) {
  SearchPage.propType = {
    shelves: PropType.array.isRequired
  }
  
  const [ results, setResults ] = useState([])
  const [ input, setInput ] = useState("")

  function handleInput(e) {
    const query = e.target.value
    setInput(query)
    console.log(query)
    
    if (query) {
        BooksAPI.search(query.trim(), 20).then(response => {
        console.log(response)
        response.length > 0
         ? setResults(response)
         : setResults([])
      })
    } else setResults([])

  }

  function updateBook(book, newShelf) {
    console.log(book)
    console.log(newShelf)

    // TODO API call, currently not working
    BooksAPI.update(book, newShelf).then(response => {
        console.log(response)
    })
}
  return (
    <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" />
            <div className="search-books-input-wrapper">
              <input
                onChange={handleInput}
                value={input}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          { results.length > 0 
            ? <SearchResults results={results} shelves={shelves} updateBook={updateBook}/> 
            : <div>No results</div>
          }
        </div>  
    </div>
    );
}