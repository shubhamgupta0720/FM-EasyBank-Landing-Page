import React from "react";

function LatestArticlesCard({img = "", author = "", title = "", description = ""}){
    return(
        <div className="article-card">
            <img src={img} alt="" />
            <span>By {author}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default LatestArticlesCard;