import axios from 'axios';

const url = 'http://localhost:5000/users';

export const addUser = async (token, user) => {
    await axios.post(`${url}/addUser`,user, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    });
}

export const editUser = async (token, user) => {
    // console.log(user);
    // console.log(token);
    await axios.post(`${url}/editUser`,user, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    });
}

export const getUser = async (token, userId) => {
    const res= await axios.get(`${url}/getUser/${userId}`,{
        headers: {
            authorization: 'Bearer ' + token,
        }
    });

    return res.data;
}