import React from "react";
import RequestInviteButton from "./RequestInviteButton";

function MainContent(){
    return(
        <div id="mainContent">
            <div className="content-panel">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more</p>
                <RequestInviteButton/>
            </div>
            <div className="main-content-mobile">
                <img src="src/assets/images/image-mockups.png" alt="" />
            </div>
        </div>
    )
}

export default MainContent;