import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import RecipeItem from '../../components/recipe-Item'

export default function Home() {
    const {recipesList,loading}=useContext(GlobalContext)

    if(loading){
        return <div>Loading... Please Wait</div>
    }
    
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {
            recipesList && recipesList.length?
            recipesList.map((item)=><RecipeItem item={item}/>)
            
            :<div><p className='lg:text-4xl text-xl font-extrabold text-center text-gray-700'>No Recipes To Show Please Search anythnig else</p></div>
        }

    </div>
  )
}
