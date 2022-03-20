import axios from 'axios';
import firebase from 'firebase/compat/app';


const url = `${process.env.REACT_APP_url}/jobListings`;

export const addJob = async (job) =>{
    const token = window.localStorage.getItem('token');
    const res = await axios.post(`${url}/addjob`,job, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    });
    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })
        return addJob(job);
    }
    else{
        if(res.data)
        {
            return res.data.jobid;
        }
    }
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

export const postReferral = async (jobref) => {
    const body = {
        jobReference: jobref
    }
    const token = window.localStorage.getItem('token');
    const res = await axios.post(`${url}/requestReferral`,body,{
        headers:{
            authorization: 'Bearer ' + token,
        }
    });
    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })
        return postReferral(jobref);
    }
    else{
        if(res.data)
        {
            return res.data;
        }
    }
}

export const closeJobApi = async (jobid) => {
    const body ={};
    const token = window.localStorage.getItem('token');
    const res = await axios.patch(`${url}/${jobid}`,body, {
        headers:{
            authorization: 'Bearer ' + token,
        }
    });

    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })
        return closeJobApi(jobid);
    }
    else{
        if(res.data)
        {
            return res;
        }
    }
}