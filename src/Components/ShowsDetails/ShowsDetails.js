import React, { useState } from 'react'
import { useContext } from 'react'
//import { SearchContext } from '../../Contexts/searchContext'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import './ShowsDetails.css'
import YouTube from 'react-youtube'
import length from 'array-length'
import { movieDetailsContext } from '../../Contexts/movieDetailsContext'



function ShowsDetails() {

  const [videoId, setVideoId] = useState()
  const [isVideo, setIsVideo] = useState(false)
  const { Movie } = useContext(movieDetailsContext)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      fs: 0,
      loop: 1,
      autoplay: 1,
      origin: `https://www.youtube.com`
    }
  }



  async function handleVideo() {

    if (isVideo === true) {
      setVideoId(null)
      setIsVideo(!isVideo)

    } else {
      var response = await axios.get(`/${'movie' || 'tv'}/${Movie.id}/videos?api_key=${API_KEY}`).catch((err) => {

        if (err.response.status == 404) {
          alert("Oopppss...Video Not Found")
          setIsVideo(null)
          console.log('heedfsdf')
        }
      })




      if (response && length(response.data.results) !== 0) {

        setIsVideo(!isVideo)
        setVideoId(response.data.results[0].key)
      } else {
        alert("Oopppss...Video Not Found")
        setIsVideo(null)
      }
    }
  }



  return (
    <div className='ShowsDetails'>
      {
        Movie ?
          <div style={{ width: '100%' }}>
            <div className="media-section">
              {
                videoId ? <YouTube videoId={videoId} opts={opts} /> : <img className='media' src={`${Movie ? imageUrl + Movie.backdrop_path : ""}`} alt="Movie-Back-Drop" />
              }

            </div>
            <div className="content-section">
              <h1>{Movie.title}</h1>
              <h6>Released On : {Movie.release_date}</h6>
              <div>
                <p className='description'>{Movie.overview}
                </p>
              </div><br />
              <h5 className='rating' style={{ color: '#FFD700' }}>Rating  : {Movie.vote_average}/10 ({Movie.vote_count})</h5>
              <button className='videoButtton' onClick={handleVideo}>{isVideo ? 'See Back Drop' : 'Play Video'}</button>

            </div>

          </div>
          :
          <div className='err-msg'>
            <h2> Oopppss....! Details Not Found,Try another one...</h2>
          </div>
      }


    </div>
  )
}

export default ShowsDetails