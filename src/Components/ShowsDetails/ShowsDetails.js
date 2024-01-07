import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/searchContext'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import './ShowsDetails.css'
import YouTube from 'react-youtube'
import length from 'array-length'



function ShowsDetails() {
  const [videoId,setVideoId]=useState()
const [isVideo,setIsVideo]=useState(false)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
            fs:0,
            loop:1,
        autoplay: 1,
        origin: `https://www.youtube.com`
    }
}
  const {searchQuery} =useContext(SearchContext)
 const [searchResult,setSearchResult]=useState([])


 async function handleVideo(){
  console.log(isVideo)
  if(isVideo===true){
   setVideoId(null)
   setIsVideo(!isVideo)

  }else{
    var response = await axios.get(`/${'movie' || 'tv'}/${searchResult.id}/videos?api_key=${API_KEY}`)
    if (length(response.data.results) !== 0) {
      setIsVideo(!isVideo)
     
        setVideoId(response.data.results[0].key)
        
    
    } else {
        alert("Oopppss...Video Not Found")
    }
  }
  }
   
 useEffect(() => {
  axios.get(`/search/movie?query=${searchQuery}&api_key=${API_KEY}`).then((response)=>{
  
    setSearchResult(response.data.results[0])

  },[])

  
})

  return (
   <div className='ShowsDetails'>
    {
      searchResult?
      <div style={{width:'100%'}}>
      <div className="media-section">
        {
          videoId?<YouTube videoId={videoId} opts={opts} />:<img className='media' src={`${searchResult?imageUrl+searchResult.backdrop_path:""}`} alt="Movie-Back-Drop" />
        }
           
        </div>
        <div className="content-section">
          <h1>{searchResult.title}</h1>
          <h6>Released On : {searchResult.release_date}</h6>
          <div>
          <p className='description'>{searchResult.overview}
          </p>
          </div><br />
          <h5 className='rating' style={{color:'#FFD700'}}>Rating  : {searchResult.vote_average}/10 ({searchResult.vote_count})</h5>
          <button className='videoButtton' onClick={handleVideo}>{isVideo?'See Back Drop':'Play Video'}</button>
  
        </div>
  
      </div>
      :
      <div className='err-msg'>
          <h2>Oopppss....! Movie Not Found,Try another one...</h2>
      </div>
    }
    
   
   </div>
  )
}

export default ShowsDetails