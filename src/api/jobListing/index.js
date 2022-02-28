import axios from 'axios';

const url = 'http://localhost:5000/jobListings';

export const addJob = async (token, job) =>{
    const res = await axios.post(`${url}/addjob`,job, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    });
    return res.data.jobid;
}

export const getJob = async (jobid) => {
    const res = await axios.get(`${url}/${jobid}`);
    return res.data;
}

export const getJobList = async (lastJobId) => {
    let res;
    // console.log(lastJobId);
    if(lastJobId)
        res = await axios.get(`${url}/?lastJobId=${lastJobId}`);
    else
        res = await axios.get(`${url}`);
    return res.data;
}

export const postReferral = async (token,jobref) => {
    const body = {
        jobReference: jobref
    }
    const res = await axios.post(`${url}/requestReferral`,body,{
        headers:{
            authorization: 'Bearer ' + token,
        }
    });
    console.log(res.message);
}