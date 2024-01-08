import React from 'react'
import { useContext, useState, useEffect } from 'react'
import axios from '../../axios'
import { SearchContext } from '../../Contexts/searchContext'
import { API_KEY, imageUrl } from '../../constants/constants'
import './SearchResult.css'
import { useNavigate } from 'react-router-dom'
import { movieDetailsContext } from '../../Contexts/movieDetailsContext'

function SearchResult() {

  const navigate = useNavigate()
  const { updateMovie } = useContext(movieDetailsContext)
  const { searchQuery } = useContext(SearchContext)
  const [searchResult, setSearchResult] = useState([])

  function DirectMovieDetails(movieDetails) {
    updateMovie(movieDetails)
    navigate('/movie-details')
  }
  useEffect(() => {
    axios.get(`/search/movie?query=${searchQuery}&api_key=${API_KEY}`).then((response) => {
      setSearchResult(response.data.results)

    })
  })


  return (
    <div className='search-results'>

      {
        searchResult.length !== 0 ?
          <div className='searched-posters'>
            {
              searchResult.map((obj,index) => {
                return (
                  <div className='each-movies'>
                    {
                      obj.poster_path ?
                        <div>

                          <img className='searched-poster' alt={'poster'+index}
                            src={`${imageUrl + obj.poster_path}`}
                            onClick={() => { DirectMovieDetails(obj) }}
                          />
                        </div>
                        : <div>
                          <div className='loading-poster'></div>
                        </div>
                    }

                  </div>


                )
              })
            }
          </div>
          :
          <div className='err-msg'>
            <h2> Oopppss....! Details Not Found,Try another one...</h2>
          </div>

      }

    </div>
  )
}

export default SearchResult