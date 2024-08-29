import React from "react";

import { NavLink } from "react-router-dom";

const Navbar =()=>{
return(
    <div className="header">
    <div className="topleft"> 
    <img className=" header-logo" src="./clgpics/logo.png" alt="..." />
    </div>

    <div className="topcenter">
        <ul className="nav-menu">
           <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
           <li><NavLink to={'/about'} className={'nav'}>About </NavLink></li>
           <li><NavLink to={'/contact'} className={'nav'}>Contact Us</NavLink></li>
           <li><NavLink to={'/admission'} className={'nav'}>Admission</NavLink></li>
        </ul>
        </div>

        <div className="topright"> 
        <form class="d-flex" role="search">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button class="btn0 " type="submit">Serch</button>
       </form>
       </div>

      </div>

)
}

export default Navbar;