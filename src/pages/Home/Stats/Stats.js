import React from "react";

import "./Stats.scss";
import {StatsItem} from "./StatsItem";

function Stats() {

    const stats = [
        {
            title: "230+",
            description: "Scientifically\n" +
                "based tests",
            id: 0
        },
        {
            title: "10,000+",
            description: "Medical recommendations",
            id: 1
        },
        {
            title: "25M+",
            description: "Students learning",
            id: 2
        }

    ];

    return (
        <div className="Stats container">
            {stats.map(el => <StatsItem key={`stat-${el.id}`} title={el.title} description={el.description}/>)}
        </div>
    )
}

export default Stats;