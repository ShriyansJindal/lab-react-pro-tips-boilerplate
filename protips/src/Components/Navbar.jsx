// import React from 'react'
import {Link} from "react-router-dom"
import "./nav.css"

const Navbar = () => {
  return (
    <div className="container">
        <h1>
        <Link style={{color:"white", textDecoration:"none"}} to={"/"}>KALVIUM❤️</Link>
        </h1>
        <div className="nav">

        <Link style={{color:"white", textDecoration:"none"}} to={"/contact"}>Contact</Link>
        <Link style={{color:"white", textDecoration:"none"}} to={"/about"}>Registration Form</Link>
        </div>
    </div>
  )
}

export default Navbar