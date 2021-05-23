import React from "react";

import "./Logo.scss";
import ellipse from "../../assets/ellipse.svg";

function Logo() {

    return (
        <div className="Logo">
            <img className="Logo__image" src={ellipse}  alt="medli logo"/>
            <h1 className="Logo__title">Medli</h1>
        </div>
    )
}

export default Logo;