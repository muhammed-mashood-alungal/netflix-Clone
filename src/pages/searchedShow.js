import React, { Fragment } from 'react'
import NavBar from '../Components/NavBar/NavBar'

import Banner from '../Components/Banner/Banner'
import ShowsDetails from '../Components/ShowsDetails/ShowsDetails'
function searchedShow() {
  return (
    <Fragment>
        <NavBar/>
      
       <ShowsDetails/>
       
        
    </Fragment>
  )
}

export default searchedShow