import React,{createContext, useState} from "react";

const SearchContext=createContext()
const SearchProvider=({children})=>{
    const [searchQuery,setSearchQuery]=useState()
    const updateSearchQuery=(query)=>{
        setSearchQuery(query)
    }
    return(
       <SearchContext.Provider value={{searchQuery,updateSearchQuery}}>
        {children}
       </SearchContext.Provider>
    )
}
export {SearchContext,SearchProvider}
 