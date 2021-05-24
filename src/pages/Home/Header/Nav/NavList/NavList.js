import React from "react";
import { NavLink } from 'react-router-dom'

import "./NavList.scss";

function NavList() {

    return (
            <ul className="NavList">
                <li><NavLink to="/" activeClassName="NavList__link-active">Home</NavLink></li>
                <li>About</li>
                <li>Courses</li>
                <li><NavLink to="/news" activeClassName="NavList__link-active">News</NavLink></li>
                <li>Contact</li>
                <li>Log in</li>
            </ul>
    )
}

export default NavList;