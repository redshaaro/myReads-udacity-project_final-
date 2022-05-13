import React from "react";
import {Link} from "react-router-dom";
import Book from "./Book";

const Searchbooks = ({query,setquery,sbooks,changeShelf,book}) => {
  
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">close</Link>
          <div className="search-books-input-wrapper">
            { <input type="text" placeholder="Search by title, author, or ISBN"  value={query} onChange={(e)=>{setquery(e.target.value);}}/>}
            
          
                            

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {console.log(sbooks)}
            {sbooks.map((book)=>(<Book key={book.id} changeShelf={changeShelf} book={book}></Book>))}

           



          </ol>
        </div>
      </div>
    </div>
  );
};
export default Searchbooks;
