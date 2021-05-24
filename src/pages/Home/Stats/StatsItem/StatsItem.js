import React from "react";

import "./StatsItem.scss";

function StatsItem({name, description}) {
    return (
        <div className="StatsItem">
            <h2 className="StatsItem__name">{name}</h2>
            <h3 className="StatsItem__description">{description}</h3>
        </div>
    )
}

export default StatsItem;