import React from "react";

import "./Front.scss";
import hero from "../../../assets/hero.svg";

function Front() {

    return (
        <div className="Front">
            <div className="Front__banner">
                <img className="Front__banner__image" src={hero} alt="woman reading & smiling"/>
            </div>
            <div className="Front__main">
                <h1 className="Front__main__title">Check your well-being</h1>
                <h2 className="Front__main__description">We’re sure that deciding to check on your health is a big step,
                    even
                    if it doesn’t bother in any way. </h2>
                <button className="Front__main__button">Get started</button>
            </div>
        </div>
    )
}

export default Front;