
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { createElement } from 'react'
import { FaCreativeCommonsBy } from 'react-icons/fa6'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import RootRouter from './components/RootRouter'
import Footer from './pages/Footer'

function App() {
  

  let myRoute =createBrowserRouter(createRoutesFromElements(
    <Route element={<RootRouter/>}>
      <Route path="/" element={<Home/>}/>
      <Route path='/about'element={<AboutUs/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
