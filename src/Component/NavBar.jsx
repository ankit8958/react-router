import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return(
        <>
        <div className="main_style">
        <NavLink activeClassName="active" to="/">About</NavLink>
        {/* <NavLink activeClassName="active" to="/search">Search</NavLink> */}
        <NavLink activeClassName="active" to="/service">Service</NavLink>
        <NavLink activeClassName="active" to="/users/ankit/gupta">Users</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        </>
    )
}
export default NavBar;