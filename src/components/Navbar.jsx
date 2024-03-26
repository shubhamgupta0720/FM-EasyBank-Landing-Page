import React from "react";

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
            <button>Request Invite</button>
        </div>
    )
}

export default Navbar;