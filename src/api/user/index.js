import axios from 'axios';
import firebase from 'firebase/compat/app';



const url = `${process.env.REACT_APP_url}/users`;

export const addUser = async (user) => {
    const token = window.localStorage.getItem('token');
    const res = await axios.post(`${url}/addUser`,user, {
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
        return addUser(user);
    }
    else{
        return res.data;
    }
}

export const editUser = async (user) => {
    // console.log(user);
    // console.log(token);
    const token  = window.localStorage.getItem('token');
    const res = await axios.patch(`${url}/editUser`,user, {
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
        editUser(user);
        return;
    }
    else{
        return;
    }
    
}

export const getUser = async (userId) => {
    // const token = window.localStorage.getItem('token');
    // console.log(userId);
    const res= await axios.get(`${url}/getUser/${userId}`);

    return res.data;
}

export const getSecUser = async (userId) => {
    // const token = window.localStorage.getItem('token');
    // console.log(userId);
    const res = await axios.get(`${url}/getUserSec/${userId}`);
    // console.log(res.data);
    return res.data;
}

export const getOwnUser = async (toke) => {
    const token = window.localStorage.getItem('token');
    // console.log("here is coming");
    const res= await axios.get(`${url}/getUser`,{
        headers: {
            authorization: 'Bearer ' + token,
        }
    });

    // console.log(res.status);

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
        return getOwnUser();
    }
    else{
        if(res.data)
            return res.data;
    }

}