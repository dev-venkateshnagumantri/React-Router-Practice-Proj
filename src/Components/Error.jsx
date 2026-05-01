import { useNavigate, useRouteError } from "react-router-dom";

function ErrorDisplay(){
    const error = useRouteError();
    const navigate = useNavigate();
    //console.log(error);
    return (
       
        <div>
            <h3>Oops! An Error Occured!</h3>
            <br />
            <h4>{error.message}</h4>
            <br/>
            <button className="error-button" onClick={()=>navigate("/")}>Go to Home page</button>
        </div>
        
    
    );
}

export default ErrorDisplay;