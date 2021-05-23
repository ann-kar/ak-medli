import React from "react";

import "./Header.scss";
import {Logo} from "../../../components";
import {Nav} from "../Header";

function Header() {

    return (
        <div className="Header">
            <Logo/>
            <Nav />
        </div>
    )
}

export default Header;