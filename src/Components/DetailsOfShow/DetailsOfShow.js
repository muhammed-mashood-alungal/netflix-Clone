import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/searchContext'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
function DetailsOfShow() {

 const {searchQuery} =useContext(SearchContext)
 const [searchResult,setSearchResult]=useState([])
 useEffect(() => {
   axios.get(`/search/movie?query=${searchQuery}&api_key=${API_KEY}`).then((response)=>{
   
     setSearchResult(response.data.results[0])
     console.log('hello')
     console.log(searchResult)
     console.log('hello')
   })
 
   
 })
 
  return (
    <div>
      < h1>hellooosdfkasdfks</h1>
       <div className="back-drop" style={{backgroundImage:`url(${searchResult? imageUrl+searchResult.backdrop_path:""})`}}></div>
 
     
      </div>
      
    
  )
}

export default DetailsOfShow