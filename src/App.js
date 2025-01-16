
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components';
import Home from './pages/home';
import Faviourate from './pages/faviorute';
import Details from './pages/details';

function App() {
  return (
    <div >
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/favorites' element={<Faviourate/>} ></Route>
          <Route path='/recipe-items/:id' element={<Details/>}></Route>
        </Routes>

      </div>
      
      
    </div>
  );
}

export default App;
