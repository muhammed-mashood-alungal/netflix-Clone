import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
function Banner() {
    var randomInt
    const [trendingMovie,setTrendingMovie]=useState([])
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       
    randomInt= Math.floor(Math.random() * (15 - 1 + 1)) + 1;
         setTrendingMovie(response.data.results[randomInt])
     
      })
    
    }, [])
    
    return (
        <div 
         className='banner' style={{backgroundImage:`url(${trendingMovie? imageUrl+trendingMovie.backdrop_path:""})`}}>
            <div className='content' >
            <h1 className='title'>{trendingMovie.title}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <div className='description-div'>
                <h3 className='description'> {trendingMovie.overview}</h3>
                </div>
                
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner