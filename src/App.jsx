import './App.css'
import Navbar from './components/reusable/Navbar'
import { Search } from './components/reusable/Search'
import { Footer } from './components/reusable/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Navbar /> 
    <Search />
    <Outlet />
    <Footer /> 
    </>
  )
}

export default App
