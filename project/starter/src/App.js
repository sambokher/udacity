import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const shelf1 = ["currentlyReading", "Currently Reading"]
    const shelf2 = ["wantToRead", "Want to Read"]
    const shelf3 = ["read", "Read"]
    const shelves = [ shelf1, shelf2, shelf3]
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage shelves={shelves} />} />
        <Route exact path="/search" element={<SearchPage shelves={shelves}/>} />
      </Routes>
    </div>
  );
}

export default App;
