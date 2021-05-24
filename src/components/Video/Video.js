import React from "react";

import "./Video.scss";
import videoIcon from "../../assets/videoIcon.svg";

function Video() {

    return (
        <>
            <div className="Video">
                <button className="Video__icon">
                    <img className="Video__icon__arrow" src={videoIcon} alt="play button" />
                </button>
            </div>
        </>
    )
}

export default Video;