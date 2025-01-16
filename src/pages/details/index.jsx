import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../Context'

export default function Details() {
    const { id } = useParams()
    const { recipeDetails, setRecipeDetails,favourList,setFavourList } = useContext(GlobalContext)

    function savefavorites(){
        setFavourList((previous)=>[...previous,recipeDetails?.data?.recipe])

    }

    useEffect(() => {
        async function getrecipeDetails() {
            try {
                const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
                const data = await res.json()
                setRecipeDetails(data)
                console.log(data)
            } catch (error) {

            }
        }
        getrecipeDetails()
    }, [id])

    console.log(favourList)
    return (
        <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='row-start-2 lg:row-start-auto'>
                <div className='h-95 overflow-hidden rounded-xl group'>
                    <img className='w-full h-full object-cover block group-hover:scale-105 'alt='recipe-details'
                        src={recipeDetails?.data?.recipe?.image_url}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <span>{recipeDetails?.data?.recipe?.publisher}</span>
                <h3 className='font-bold text-sm uppercase truncate text-black'>{recipeDetails?.data?.recipe?.title}</h3>
                <div>
                    <Link to='/favorites'>
                        <button onClick={savefavorites} className='p-3 px-8 rounded-lg uppercase tracking-wide text-sm font-medium bg-black mt-3 inline-block shadow-md text-white hover:shadow-xl duration-100 hover:scale-105'>Save as Favourites</button>

                    </Link>
                </div>
                <div>
                <span className='text-2xl font-semibold'>Ingredients :</span>
                <ul className='flex flex-col gap-3'>
                    {
                        recipeDetails?.data?.recipe?.ingredients.map((item)=><li>
                            <span>{item.quantity} {item.unit} {item.description}</span>
                          
                        </li>)
                    }
                </ul>
            </div>

            </div>
           


        </div>
    )
}
