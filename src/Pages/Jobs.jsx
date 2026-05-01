import { Link, useLoaderData } from "react-router-dom";
function JobsPage(){
    const jobs_data = useLoaderData();
    return(
        <div className="jobs-page">
            <h4>The List of available jobs are:</h4>
            <br />
            {
                jobs_data.map(
                    (job)=>{
                        return (
                        <div>
                        <Link to={job.id}><p><b>{job.title}</b></p></Link>
                            <p>₹ {job.salary}</p>
                            <br />
                        </div>
                        );
                    }
                )
            }
        </div>
    );
}

export default JobsPage;

export const jobsLoader = async ()=>{
    const resp = await fetch("http://localhost:5000/jobs/");
    if (!resp.ok){
        throw Error("Could not load jobs");
    }
    return resp.json();
}