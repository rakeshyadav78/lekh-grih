import axios from "axios";

const API_URL = 'http://localhost:8001/passvault'; // Your API endpoint

export const fetchCredCategory = async () => {
    try {
        const response = await axios.get(API_URL + '/cred-category/getAllCategory', {
            responseType: 'json' // Correct type 'json', not JSON
        });
        const data = response.data;
        const status = response.status;
        console.log('Response data: ', data);
        console.log('Response status: ', status);
        return data.respObj;
    } catch (error) {
        console.log(error)
    }
}


export const createCredCat = async (cid, description) => {
    try {
        const reqData = {
            cid: cid,
            description: description
        }
        const response = await axios.post(API_URL + '/cred-category/create', reqData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
        const status = response.status;
        console.log('Response data: ', data);
        console.log('Response status: ', status);
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const fetchCredSubCategory = async () => {
    try {
        const response = await axios.get(API_URL + '/cred-sub-category/getAllCategory', {
            responseType: 'json' // Correct type 'json', not JSON
        });
        const data = response.data;
        const status = response.status;
        console.log('Response data: ', data);
        console.log('Response status: ', status);
        return data.respObj;
    } catch (error) {
        console.log(error)
    }
}


export const createSubCredCat = async (scid, description) => {
    try {
        const reqData = {
            scid: scid,
            description: description
        }
        const response = await axios.post(API_URL + '/cred-sub-category/create', reqData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
        const status = response.status;
        console.log('Response data: ', data);
        console.log('Response status: ', status);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCredLoginTypes = async () => {
    try {
        const response = await axios.get(API_URL + '/cred-logintype/getAllType', {
            responseType: 'json' // Correct type 'json', not JSON
        });
        const data = response.data;
        const status = response.status;
        console.log('Response data: ', data);
        console.log('Response status: ', status);
        return data.respObj;
    } catch (error) {
        console.log(error)
    }
}


export const createCredLoginType = async (loginType, description) => {
    try {
        const reqData = {
            type: loginType,
            description: description
        }
        const response = await axios.post(API_URL + '/cred-logintype/create', reqData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
        const status = response.status;
        console.log('Response data: ', data);
        console.log('Response status: ', status);
        return data;
    } catch (error) {
        console.log(error)
    }
}