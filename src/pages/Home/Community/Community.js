import React from "react";

import "./Community.scss";
import {Video} from "../../../components";

function Community() {
    return (
        <div className="Community">
            <h2 className="Community__title">What our community is saying?</h2>
            <h3 className="Community__description">A mission-driven company that invest
                in and builds healthier living</h3>
            <div className="Community__video container">
                <Video />
            </div>
        </div>
    )
}

export default Community;