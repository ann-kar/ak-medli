import React from "react";

import "./BenefitsItem.scss";

function BenefitsItem({image, title, description}) {
    return (
        <div className="BenefitsItem">
            <img className="BenefitsItem__image" src={image} alt={title}/>
            <h2 className="BenefitsItem__header">{title}</h2>
            <h3 className="BenefitsItem__desc">{description}</h3>
        </div>
    )
}

export default BenefitsItem;