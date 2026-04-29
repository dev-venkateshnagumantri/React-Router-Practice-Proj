import { Outlet } from "react-router-dom";

function CareersLayout(){

    return (
        <>
        <h2>There are some job openings in our firm. you can be part of our amazing family !</h2>
        <Outlet />
        
        </>
    );
}

export default CareersLayout;