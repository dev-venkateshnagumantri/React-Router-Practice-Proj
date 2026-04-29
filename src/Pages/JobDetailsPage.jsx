import { useLoaderData, useParams } from "react-router-dom";

function JobDetails(){
    const job_detail = useLoaderData();
    console.log(job_detail)
    return(
        <>
        <p><b>Job Title:</b>{job_detail.title}</p>
        <p><b>Job Salary:</b>₹ {job_detail.salary}</p>
        <p><b>Job Location:</b>{job_detail.location}</p>
        </>
    )
}

export default JobDetails;

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const resp = await fetch(`http://localhost:5000/jobs/${id}`);
    if (!resp.ok){
        throw Error("Could not find required details for this job id !");
    }
    return resp.json();
}