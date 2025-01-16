import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext=createContext(null)

export default function GlobalState({children}){
    const [searchParam,setSearchParam]=useState('')
    const [loading,setLoading]=useState(false)
    const [recipesList,setRecipesList]=useState([])
    const [recipeDetails,setRecipeDetails]=useState(null)
    const [favourList,setFavourList]=useState([])
    const  navigate =useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            navigate('/');

            setLoading(true)
            const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data=await res.json()
            if(data?.data?.recipes){
                setRecipesList(data.data.recipes)
                setLoading(false)
                setSearchParam('')

            }
        } catch (error) {
            setLoading(false)
            setSearchParam('')
        }
        
    }
   


    return(
        <GlobalContext.Provider value={{
            searchParam,setSearchParam,handleSubmit,loading,recipesList,recipeDetails,
            setRecipeDetails,favourList,setFavourList}} >
            {children}
        </GlobalContext.Provider>
    )
}