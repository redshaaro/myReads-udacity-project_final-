import React from 'react'
import {Link} from "react-router-dom";
import Shelf from './Shelf';


const Home = ({books,changeShelf}) => {
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            <Shelf books={books}  section="currently reading" category="currentlyReading" changeShelf={changeShelf}></Shelf>
            <Shelf books={books} section=" want to read" category="wantToRead" changeShelf={changeShelf}></Shelf>
            <Shelf books={books} section="read" category="read" changeShelf={changeShelf}></Shelf>

          
              
          
            </div>
          </div>
        
       
      <div className="open-search">
         <Link to="/search"></Link>
      </div>
      </div>
      
    
  );
}

export default Home