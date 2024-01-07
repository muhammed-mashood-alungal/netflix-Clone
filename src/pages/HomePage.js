import React, { Fragment } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'

import RowPost from '../Components/RowPost/RowPost'
import {  Actions, ComedyMovies, HorrorMovies, NetflixOriginals, RomanceMovies } from '../url'

function HomePage(props) {
  return (
    
   <Fragment>
  
    <NavBar/>
    <Banner/>
    <RowPost title="Netflix Original"  isMainRow url={NetflixOriginals} />
        <RowPost title="Action"  url={Actions}/>
        <RowPost title="Romance"  url={RomanceMovies}/>
        <RowPost title="Comedy"  url={ComedyMovies}/>
        <RowPost title="Horror"  url={HorrorMovies}/>

       </Fragment>
  )
}

export default HomePage