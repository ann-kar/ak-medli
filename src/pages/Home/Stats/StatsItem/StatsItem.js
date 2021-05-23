import React from "react";

import "./StatsItem.scss";

function StatsItem({title, description}) {
    return (
        <div className="StatsItem">
            <h2 className="StatsItem__title">{title}</h2>
            <h3 className="StatsItem__description">{description}</h3>
        </div>
    )
}

export default StatsItem;