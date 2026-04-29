import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();
    return(
        <div className="menu-container">
            <ul>
                <NavLink to="/"><li className="list-item">Home</li></NavLink>
                <NavLink to="about/"><li className="list-item">About</li></NavLink>
                <NavLink to="contact/"><li className="list-item">Contact</li></NavLink>
                <NavLink to="jobs/"><li className="list-item">Jobs</li></NavLink>
                <button onClick={()=>{navigate('products/',{replace:true});}}>Get Started</button>
            </ul>
        </div>
    );
}

export default Navbar;