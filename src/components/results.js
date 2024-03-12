import React from 'react'
import { useLocation } from 'react-router-dom';
import  '../ScrollablePage.css';

const SearchResults = (props) => {
    const location = useLocation();
    const apiResult = location.state;
    console.log(apiResult);
  return (
    <>

<div>
  
        {
          apiResult.books.map((book) => {
            return(

              <section class="blog-card">
      <img
        src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
        style={{ objectFit: "scale-down", backgroundColor: "white"}}
      />
      <div class="blog-content">
        <p class="blog-label">{book.volumeInfo.publisher}</p>
        <h1>{book.volumeInfo.title}</h1>
        <p>
          {book.volumeInfo.description}
        </p>
        <div class="author">
        <p>by {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</p>
        </div>
      </div>
    </section>
              
              // <h1>
              //   <img/>
              //   {book.volumeInfo.title}
              //   <br></br>
              //   {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail && (
              //   <img width={'290px'} src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
              //   )}
              // </h1>
            )
          })
        }
      
      </div>
    </>
  )
}

export default SearchResults