import React from 'react'
import axios from 'axios';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import secbook from './bookeyes.jpg';


const SearchPage = () => {
    const [apiResult, setApiResult] = useState([]);
    const navigate = useNavigate();
    const API_KEY = 'AIzaSyAZYrxe-wD72-QEqgZJ6v4ElDOm1Bctag0';
  
  return (
    <div>
        <div className="App">
        <header className="App-header">
        <img src={secbook} id="imgbook"></img>
        <h4>Search for a book!</h4>
        <input id = "query" type = "text"></input>
        <br></br>
        <button onClick = {() => {
          let bookName = document.getElementById("query").value;
          
          const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=${10}&key=${API_KEY}`;

          //FETCHING DATA USING API
          axios
          .get(apiUrl)
          .then((response) => {
            const books = response.data.items;
            if (books) {
              console.log(books);
              
              navigate(`/search/`, {
                state: { books },
              });
              
              setApiResult(books);
            } else {
              console.log('No books found.');
              alert("No Books founds!");
            }
          })
          .catch((error) => {
            console.error('Error fetching book data:', error);
          });
          
          
          }
        }>🔎</button>
      </header>
        </div>
    </div>
  )
}

export default SearchPage