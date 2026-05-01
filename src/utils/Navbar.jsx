import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import react from '../assets/react.svg';

function Navbar(){

    const navigate = useNavigate(); 

    {/* using this hook we are creating a function called navigate, in which we can pass any path later */}

    return(
        <div className="menu-container">
            <NavLink to="/"><img src={react} alt='' width='40px'/></NavLink>
            <ul>
                
                <NavLink to="/"><li className="list-item">Home</li></NavLink>
                <NavLink to="about/"><li className="list-item">About</li></NavLink>
                <NavLink to="contact/"><li className="list-item">Contact</li></NavLink>
                <NavLink to="jobs/"><li className="list-item">Jobs</li></NavLink>
                <button onClick={()=>{return navigate('products/',{replace:true});}}>Get Started</button>
            </ul>
        </div>
    );
}

export default Navbar;