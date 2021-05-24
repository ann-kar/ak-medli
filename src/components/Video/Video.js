import React from "react";

import "./Video.scss";
import videoIcon from "../../assets/videoIcon.svg";

function Video() {

    return (
        <>
            <div className="Video">
                <button className="Video__icon">
                    {/*<div className="Video__icon__arrow"></div>*/}
                    <img className="Video__icon__arrow" src={videoIcon} />
                </button>
            </div>
        </>
    )
}

export default Video;