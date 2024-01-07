import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
import length from 'array-length'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [videoId, setVideoId] = useState('')
    const [showVideo, setShowVideo] = useState(false)
    useEffect(() => {

        axios.get(`${baseUrl + props.url}`).then((response) => {
            setMovies(response.data.results)
        })

    })
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
    async function handleVideo(obj, status) {

        if (status) {
            alert("Oopppss...Video Not Found")
        } else {
            setShowVideo(!showVideo)
            console.log(showVideo)

            var response = await axios.get(`/${'movie' || 'tv'}/${obj.id}/videos?api_key=${API_KEY}`)
            if (length(response.data.results) !== 0) {
               
                setVideoId(response.data.results[0].key)
            
            } else {
                alert("Oopppss...Video Not Found")
            }
        }



    }
    return (
        <div className='row'>
            
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj) => {
                        return (

                            <img onClick={() => { handleVideo(obj, props.isMainRow) }} className={props.isMainRow ? 'mainRowPoster' : 'normalPoster'} alt='poster' src={`${imageUrl + obj.poster_path}`} />

                        )
                    })
                }
            </div>
            {videoId && showVideo && <YouTube videoId={videoId} opts={opts} />}
        </div>
    )
}

export default RowPost