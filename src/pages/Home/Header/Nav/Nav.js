import React, {useState} from "react";

import "./Nav.scss";
import NavList from "./NavList/NavList";

function Nav() {

    const [burger, setBurger] = useState(false);

    const iconHandler = () => {
        setBurger(!burger)
    };

    return (
        <div className="Nav">
            <div className="Nav__icon" onClick={iconHandler}>
                <div className="Nav__icon__bar"/>
                <div className="Nav__icon__bar"/>
                <div className="Nav__icon__bar"/>
            </div>
            <div className={`Nav__burger ${burger ? "burgerOn" : "burgerOff"}`}>
                <NavList/>
            </div>
            <div className="Nav__inline">
                <NavList/>
            </div>
        </div>
    )
}

export default Nav;