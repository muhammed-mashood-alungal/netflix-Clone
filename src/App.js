import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import search from './pages/search';
import HomePage from '../src/pages/HomePage'
import { SearchProvider } from './Contexts/searchContext';
import movieDetails from './pages/movieDetails';
import { MovieProvider } from './Contexts/movieDetailsContext';


function App() {

  return (
    <div className="App">
      <MovieProvider>
        <SearchProvider>
          <Router >
            <Routes>
              <Route path='/' exact element={<HomePage />}></Route>
              <Route path='/search' Component={search}></Route>
              <Route path='/movie-details' Component={movieDetails}></Route>
            </Routes>
          </Router>
        </SearchProvider>
      </MovieProvider>








    </div>
  );
}

export default App;
