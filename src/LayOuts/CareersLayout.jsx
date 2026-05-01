import { Outlet } from "react-router-dom";

function CareersLayout(){

    return (
        <div>
        <h2>There are some job openings in our firm. you can be part of our amazing family !</h2>
        <br />
        <Outlet /> {/* This acts as a slot for child component */}
        
        </div>
    );
}

export default CareersLayout;