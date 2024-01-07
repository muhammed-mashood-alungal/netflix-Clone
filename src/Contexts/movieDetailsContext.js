import React, { createContext, useState } from "react";

const movieDetailsContext = createContext(null)
const MovieProvider = ({ children }) => {
    const [Movie, setMovie] = useState()
    const updateMovie = (query) => {
        setMovie(query)
    }
    return (
        <movieDetailsContext.Provider value={{ Movie, updateMovie }}>
            {children}
        </movieDetailsContext.Provider>
    )
}
export { movieDetailsContext, MovieProvider }
