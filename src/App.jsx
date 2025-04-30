import { Routes, Route } from 'react-router-dom';
import "./Css/App.css";
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import NavBar from './Components/NavBar';
import { MovieProvider } from './contexts/MovieContext';




function App() {

  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  )
}


export default App;
