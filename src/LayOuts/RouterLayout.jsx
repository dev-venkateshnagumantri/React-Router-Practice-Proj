import { Outlet } from "react-router-dom";
import Navbar from "../utils/Navbar";

function RouterLayout(){

    return (
        <div>
        <Navbar />
        <div className="container">
            <Outlet /> {/* This acts as a slot for child component */}
        </div>
        
        </div>
    );
}

export default RouterLayout;