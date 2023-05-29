import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { AboutPage } from "./Pages/AboutPage"
import { NotFound404 } from "./Pages/NotFound404"
import { Navbar } from "../Navbar"



export const MainApp = () => {

  return (
    <>
        <h1>MAIN APP</h1>
        <hr />

        <Navbar/>
        
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="login" element={ <LoginPage/> }/>
          <Route path="about" element={ <AboutPage/> } /> 
          <Route path="error404" element={ <NotFound404/> } /> 
          

          {/* Rutas no validas */}
          <Route path="/*" element={ <Navigate to='/error404'/> }/>
          

        </Routes>
    </>
  )
}
