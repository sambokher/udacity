import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { useState, useEffect } from 'react';
import * as BooksAPI from "./utilities/BooksAPI";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const shelf1 = ["currentlyReading", "Currently Reading"]
    const shelf2 = ["wantToRead", "Want to Read"]
    const shelf3 = ["read", "Read"]
    const shelves = [ shelf1, shelf2, shelf3]
  
    const [ library, setLibrary] = useState([])
    
    // call to get all books in the library
    useEffect(() => {BooksAPI.getAll().then(response => {setLibrary(response)}
        )},[])

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
      <Routes>
        <Route exact path="/" element={<HomePage shelves={shelves} library={library} updateBook={updateBook}/>}/>
        <Route exact path="/search" element={<SearchPage shelves={shelves} library={library}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
