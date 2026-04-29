import { useNavigate, useRouteError } from "react-router-dom";

function ErrorDisplay(){
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <>
        <h3>Oops! An error Occured !</h3>
        <h4>{error.message}</h4>
        <button onClick={()=>navigate("/")}>Go to Home page</button>
        </>
    );
}

export default ErrorDisplay;