import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";

function RouterLayout(){

    return (
        <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
        
        </>
    );
}

export default RouterLayout;