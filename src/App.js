import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchPage from './components/search';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './components/results';

function App() {


  return (
    <>
    <Routes>
      <Route element = {<SearchPage/>} path = "/"></Route>
      <Route element = {<SearchResults />} path = "/search/"></Route>
    </Routes>
      </>
  );
}

export default App;
