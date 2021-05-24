import React from "react";

import "./Front.scss";
import hero from "../../../assets/hero.svg";
import ellipse from "../../../assets/ellipse.svg";

function Front() {

    return (
        <div className="Front container">
            <div className="Front__banner">
                <img className="Front__banner__image" src={hero} alt="woman reading & smiling"/>
            </div>
            <div className="Front__main">
                <h1 className="Front__main__title">Check <span className="nobr">y
                    <img className="Front__main__title__accent" src={ellipse} alt="ellipse"/>
                    ur</span> well-being</h1>
                <h2 className="Front__main__description">We’re sure that deciding to check on your health is a big step,
                    even if it doesn’t bother in any way. </h2>
                <button className="Front__main__button">Get started</button>
            </div>
        </div>
    )
}

export default Front;