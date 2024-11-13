import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const RootRouter = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default RootRouter