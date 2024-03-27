import React from "react";
import RequestInviteButton from "./RequestInviteButton";

function Navbar(){
    return (
        <div id="navbar">
            <img src="src/assets/images/logo.svg" alt="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <RequestInviteButton/>
        </div>
    )
}

export default Navbar;