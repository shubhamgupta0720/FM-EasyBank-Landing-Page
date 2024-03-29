import React from "react";
import RequestInviteButton from "./RequestInviteButton";

function Footer(){
    return (
        <div id="footer">
            <div className="logo-pages">
                <div className="logo-social">
                    <img src="src/assets/images/logo-dark.svg" alt="" />
                        <div className="social-icon">
                        <img src="src/assets/images/icon-facebook.svg" alt="" />
                        <img src="src/assets/images/icon-youtube.svg" alt="" />
                        <img src="src/assets/images/icon-twitter.svg" alt="" />
                        <img src="src/assets/images/icon-pinterest.svg" alt="" />
                        <img src="src/assets/images/icon-instagram.svg" alt="" />
                    </div>
                </div>
                <div className="pages">
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Support</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
            <div className="invite-copywrite">
                <RequestInviteButton/>
                <p>©Easybank. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;