import React, { useContext ,useState ,useEffect} from 'react'
import { GlobalContext } from '../../Context'
import RecipeItem from '../../components/recipe-Item'
import LoadingBar from "react-top-loading-bar";

export default function Home() {
  const { recipesList, loading } = useContext(GlobalContext)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      setProgress(30); // Start loading bar when loading begins
    } else {
      setProgress(100); // Set progress to 100 when loading finishes
    }
  }, [loading]);

  if (loading) {
    
    return <div>Loading... Please Wait</div>

  }

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      <LoadingBar
        color=
        'red' progress={progress}
        onLoaderFinished={() => setProgress(0)} />
      {
        recipesList && recipesList.length ?
          recipesList.map((item) => <RecipeItem item={item} />)

          : <div><p className='lg:text-4xl text-xl font-extrabold text-center text-gray-700'>No Recipes To Show Please Search anythnig else</p></div>
      }

    </div>
  )
}
