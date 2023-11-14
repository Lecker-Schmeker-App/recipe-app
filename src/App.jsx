import './App.css'
import Navbar from './components/reusable/Navbar'
import { Search } from './components/reusable/Search'
import { Footer } from './components/reusable/Footer'
import { Outlet } from 'react-router-dom'
import { Meals } from './components/Meals'


function App() {
  

  return (
    <>
    <Navbar /> 
    <Search />
    {/* <Meals /> */}
    <Outlet />
    <Footer /> 
    </>
  )
}

export default App
