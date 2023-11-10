import React from 'react'

import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/logo growdigital black.png"


import "../Style/Header.scss"

const Header = () => {
  return (
    <>
    
    <nav>
        <img src={logo} alt="" />
        <main>
            <HashLink smooth to={"/#home"}>Home</HashLink>
            <Link to={"/Contact"}>Contact</Link>
            <HashLink smooth to={"/#about"}>About</HashLink>
            <HashLink smooth to={"/#brand"}>Brand</HashLink>
            <Link to={"/service"}>Service</Link>
        </main>
    </nav>
    </>
  )
}

export default Header