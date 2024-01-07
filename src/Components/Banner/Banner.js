import React, { useContext, useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { movieDetailsContext } from '../../Contexts/movieDetailsContext'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
function Banner() {
    
    const [trendingMovie, setTrendingMovie] = useState([])
    const navigate = useNavigate()
    const { updateMovie } = useContext(movieDetailsContext)
    function directMovieDetails(MovieDetails) {
        console.log('hello')
        updateMovie(MovieDetails)
        navigate('/movie-details')
    }
    var randomInt
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {

            randomInt = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
            setTrendingMovie(response.data.results[randomInt])

        })

    }, [])

    return (
        <div
            className='banner' style={{ backgroundImage: `url(${trendingMovie ? imageUrl + trendingMovie.backdrop_path : ""})` }}>
            <div className='content' >
                <h1 className='title'>{trendingMovie.title} </h1>
                <div className='banner_buttons' >
                    <button className='button' onClick={() => { directMovieDetails(trendingMovie) }}>Play</button>
                    <button className='button' onClick={() => { alert('Ooops...! Your list is empty') }}>My list</button>
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