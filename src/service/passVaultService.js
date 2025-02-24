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


export const fetchCredentials = async (userName) => {
    try {
        const response = await axios.get(API_URL + '/credvault/getAllCredsByUserId?userName='+userName, {
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


export const createCred = async (reqData) => {
    try {

        console.log('calling api '+reqData)
        const response = await axios.post(API_URL + '/credvault/create', reqData, {
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

export const loginUser = async (reqData) => {
    try {

        console.log('calling api '+reqData)
        const response = await axios.post(API_URL + '/users/login', reqData, {
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

export const deleteCredCategory = async (id) => {
    try {

        console.log('calling api '+id)
        const response = await axios.delete(API_URL + '/cred-category/deleteById/'+id, {
            headers: {
                
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


export const deleteCredSubCategory = async (id) => {
    try {

        console.log('calling api '+id)
        const response = await axios.delete(API_URL + '/cred-sub-category/deleteById/'+id, {
            headers: {
                
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

export const deleteLoginType = async (id) => {
    try {

        console.log('calling api '+id)
        const response = await axios.delete(API_URL + '/cred-logintype/deleteById/'+id, {
            headers: {
                
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

export const deleteCredByUserNameAndId = async (id,userName) => {
    try {

        console.log('calling api '+id)
        const response = await axios.delete(API_URL + '/credvault/deleteByIdAndUserName?userName='+userName+'&id='+id, {
            headers: {
                
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