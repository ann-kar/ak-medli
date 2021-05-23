import React from "react";

import "./Front.scss";
import hero from "../../../assets/hero.svg";

function Front() {

    return (
        <div className="Front">
            <img className="Front__banner" src={hero} alt="woman reading & smiling" />
                <h1 className="Front__title">Check your well-being</h1>
                <h2 className="Front__description">We’re sure that deciding to check on your health is a big step, even
                    if it doesn’t bother in any way. </h2>
                <button className="Front__button">Get started</button>
        </div>
)
}

export default Front;