import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import searchedShow from './pages/searchedShow';
import HomePage from '../src/pages/HomePage'
import { SearchProvider } from './Contexts/searchContext';

function App() {
  
  return (
    <div className="App">
       <SearchProvider>
    <Router>
      <Routes>
      <Route path='/' exact element={<HomePage />}></Route>
     
      <Route path='/search' Component={searchedShow}></Route>
     
      </Routes>

    </Router>
    </SearchProvider>
     
   

     
      
        
        

    </div>
  );
}

export default App;