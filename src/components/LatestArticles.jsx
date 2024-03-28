import React from "react";
import LatestArticlesCard from "./LatestArticlesCard";
import imageConfetti from "../../src/assets/images/image-confetti.jpg"
import imageCurrency from "../../src/assets/images/image-currency.jpg"
import imagePlane from "../../src/assets/images/image-plane.jpg"
import imageRestaurant from "../../src/assets/images/image-restaurant.jpg"

function LatestArticle(){
    return(
        <div id="latestArticle">
            <h1>Latest Articles</h1>
            <div className="latest-articles-cards">
            <LatestArticlesCard img={imageCurrency} author = "Claire Robinson" title="Receive money in any currency with no fees" description="The world is getting smaller and we're becoming more mobile. So why should you be forced to receive money only in a single..."/>
            <LatestArticlesCard img={imageRestaurant} author = "Wilson Hutton" title="Treat yourself without worrying about money" description="Our simple budgeting feature allows you to separate out your spending and set realistic limit each month. That means you..."/>
            <LatestArticlesCard img={imagePlane} author = "Wilson Hutton" title="Take your Easybank card wherever you go" description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you are abroad. We'll even show you..."/>
            <LatestArticlesCard img={imageConfetti} author = "Claire Robinson" title="Our invite-only Beta accounts are now live!" description="After a lot of hardwork by the whole team, we're excited to announce our closed beta. It's easy to request an invite through the site..."/>
            </div>
        </div>
    )
}

export default LatestArticle;