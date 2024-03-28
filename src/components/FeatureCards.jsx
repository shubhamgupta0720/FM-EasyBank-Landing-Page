import React from "react";

function FeatureCards({icon = "", title = "", description = ""}){
    return(
        <div className="feature-card">
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default FeatureCards;