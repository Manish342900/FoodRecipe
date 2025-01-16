import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeItem({item}) {
  return (
    <div className='flex flex-col w-60 overflow-hidden p-5 bg-white/75 shadow-xl gap- border-2 rounded-2xl border-white hover:shadow-2xl'>
      <div className='flex h-40 justify-center overflow-hidden items-center rounded-xl'>
        <img src={item?.image_url} alt='recipe-Item' className='block w-full' />
      </div>
      <div className='flex flex-col gap-2 '>
        <span className='text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
        <h3 className='font-bold text-sm uppercase truncate text-black'>{item?.title}</h3>
        <Link className='text-sm p-3 px-8 rounded-lg uppercase font-medium tecking-wider inline-block shadow-md bg-gray-200 hover:shadow-lg hover:bg-gray-300' to={`recipe-items/${item?.id}`}>Recipe Details</Link>
      </div>
    </div>
  )
}
