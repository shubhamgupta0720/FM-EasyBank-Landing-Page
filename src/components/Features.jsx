import React from "react";
import FeatureCards from "./FeatureCards";
import IconOnline from "../../src/assets/images/icon-online.svg";
import IconBudget from "../../src/assets/images/icon-budgeting.svg";
import IconOnboard from "../../src/assets/images/icon-onboarding.svg";
import IconApi from "../../src/assets/images/icon-api.svg";

function Features(){
    return(
        <div id="features">
            <h1>Why choose EasyBank?</h1>
            <p>We leverage open banking to turn your bank account into your financial hub. <br/> Control your finances like never before</p>
            <div className="feature-cards">
                <FeatureCards icon = {IconOnline} title="Online Banking" description="Our modern web and mobile application allows you to keep a track of your finances wherever you are in the world"/>
                <FeatureCards icon = {IconBudget} title="Simple Budgeting" description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits"/>
                <FeatureCards icon = {IconOnboard} title="Fast Onboarding" description="We don't do branches. Open your account in minutes and start taking control of your finances right away"/>
                <FeatureCards icon = {IconApi} title="Open API" description="Manage your savings, investments and much more from one account. Tracking your money has never been easier"/>
            </div>
        </div>
    )
}

export default Features