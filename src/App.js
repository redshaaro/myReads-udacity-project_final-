import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Searchbooks from "./components/Searchbooks";

function App() {
  const [books, setbooks] = useState([]);
  const [sbooks, setsbooks] = useState([]);

  const [query, setquery] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setbooks(res);
    };
    getBooks();
  }, []);

  useEffect(() => {
    let isActive = true;

    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setsbooks([]);
        } else {
          if (isActive) {
            setsbooks(data);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setsbooks([]);
      console.log("UNMOUNT data from ", query);
    };
  }, [query]);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.update(book, shelf);
    const res = await BooksAPI.getAll();

    setbooks(res);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home changeShelf={changeShelf} books={books}></Home>}
          ></Route>
          <Route
            path="/search"
            element={
              <Searchbooks
                query={query}
                setquery={setquery}
                sbooks={sbooks}
                changeShelf={changeShelf}
              ></Searchbooks>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
