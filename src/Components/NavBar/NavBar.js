import React, { useContext, useState } from 'react'
import "./NavBar.css";

import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Contexts/searchContext';

function NavBar() {
    const { updateSearchQuery } = useContext(SearchContext)
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState()
    function handleSearch() {
        updateSearchQuery(searchQuery)
        navigate('/search')


    }
    return (
        <div className="navbar" >
            <img className="logo" onClick={() => { navigate('/') }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <div className="search">
                <input type="text" className='searchBar' onChange={(e) => { setSearchQuery(e.target.value) }} placeholder='SEARCH...' />
                <i className="fa-solid fa-magnifying-glass search-icon" onClick={handleSearch}></i>
            </div>

            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />

        </div>
    )
}

export default NavBar