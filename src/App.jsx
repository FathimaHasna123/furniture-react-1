import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/Footer"

function App() {
  

  return (
    <div>
   <Navbar />
   <Outlet/>
   <Footer/>
    </div>
  )
}

export default App
