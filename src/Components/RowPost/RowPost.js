import React, { useEffect, useState, useContext } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { baseUrl, imageUrl } from '../../constants/constants'

import { movieDetailsContext } from '../../Contexts/movieDetailsContext'
import { useNavigate } from 'react-router-dom'
function RowPost(props) {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const { updateMovie } = useContext(movieDetailsContext)

  useEffect(() => {
    axios.get(`${baseUrl + props.url}`).then((response) => {
      setMovies(response.data.results)
    })

  })
 
  function directMovieDetails(movieDetails) {
    updateMovie(movieDetails)
    navigate('/movie-details')
  }
  
  return (
    <div className='row'>

      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj,index) => {
            return (

              <img onClick={() => { directMovieDetails(obj) }} className={props.isMainRow ? 'mainRowPoster' : 'normalPoster'} alt={`poster`+index} src={`${imageUrl + obj.poster_path}`} />

            )
          })
        }
      </div>

    </div>
  )
}

export default RowPost