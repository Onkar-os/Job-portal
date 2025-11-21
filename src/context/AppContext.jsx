import { createContext, useState } from "react";

 export const AppContext=createContext()
export const AppContextProvider=(props)=>{

 const[searchfilter,setsearchfilter]=useState({
    title:"",
    location:""
 })

 const[issearched,setissearched]=useState(false)


const value={
      searchfilter,setsearchfilter,
      issearched,setissearched,
} 
return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
}
