import React from "react";

import "./Stats.scss";
import {StatsItem} from "./StatsItem";

function Stats() {

    const stats = [
        {
            name: "230+",
            description: "Scientifically based tests",
            id: 0
        },
        {
            name: "10,000+",
            description: "Medical recommendations",
            id: 1
        },
        {
            name: "25M+",
            description: "Students learning",
            id: 2
        }
    ];

    return (
        <div className="Stats container">
            {stats.map(el => <StatsItem key={`stat-${el.id}`} name={el.name} description={el.description}/>)}
        </div>
    )
}

export default Stats;