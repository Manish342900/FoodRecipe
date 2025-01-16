import React, { useContext } from 'react'
import RecipeItem from '../../components/recipe-Item'
import { GlobalContext } from '../../Context'

export default function Faviourate() {
      const { favourList,setFavourList } = useContext(GlobalContext)
  
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                favourList && favourList.length?
                favourList.map((item)=><RecipeItem item={item}/>)
                
                :<div><p className='lg:text-4xl text-xl font-extrabold text-center text-gray-700'>No Recipes Are Added yet</p></div>
            }
    
        </div>
  )
}
