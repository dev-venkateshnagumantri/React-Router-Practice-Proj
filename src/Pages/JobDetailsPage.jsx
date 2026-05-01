import { useLoaderData, useParams } from "react-router-dom";

function JobDetails(){
    const job_detail = useLoaderData();
    console.log(job_detail)
    return(
        <>
        <p><b>Job Title: </b>{job_detail.title}</p>
        <p><b>Job Salary: </b>₹ {job_detail.salary}</p>
        <p><b>Job Location: </b>{job_detail.location}</p>
        </>
    )
}

export default JobDetails;

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    
    /* we should use this way to assign value to variable but always unpack it in this way {var_name}
        if you assign a dynamic key in path like path=":var_name/" or try new_var_name = params.var_name
        try not to use useParams() hook inside loader since Loaders are plain async functions run by 
        the router, not components sometimes they can run on server — so useParams() is invalid here.*/
    
    const resp = await fetch(`http://localhost:5000/jobs/${id}`);
    if (!resp.ok){
        throw Error("Could not find required details for this job id !");
    }
    return resp.json();
}