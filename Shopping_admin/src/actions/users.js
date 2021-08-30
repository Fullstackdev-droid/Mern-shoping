// import package
import axios from 'axios';

// import lib
import config from '../lib/config';
import { getAuthToken } from '../lib/localStorage';


// import constant
import {
    SET_CURRENT_USER
} from '../constant';
axios.defaults.headers.common['Authorization'] = getAuthToken();

// Admin signup
export const signUp = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/signUp`,
            data
        });
        return {
            loading: false,
            data:respData.data.message
        }
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}

// Admin login
export const login = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/login`,
            data
        });
        localStorage.setItem('admin_token', respData.data.token);

        return {
            loading: false,
            result: respData.data.result,
            message: respData.data.message,
        }

    }
    catch (err) {
        console.log(err)
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}


export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};


// Logout user
export const logout = (history) => {
    localStorage.removeItem('admin_token');
    history.push('/Login')
}

// Product add
export const productAdd = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/productAdd`,
            data
        });
        return {
            loading: false,
            data:respData.data.message
        }
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}

// Product list
export const getproduct = async (token, dispatch) => {
    try {
        let respData = await axios({
            'method': 'get',
            'url': `${config.API}/admin/getproduct`,
        });
        console.log("respData.data",respData.data);

        return {
            status: respData.data.status,
            productDetails: respData.data.productDetails
        }
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}

// Product count
export const getproductCount = async (token, dispatch) => {
    try {
        let respData = await axios({
            'method': 'get',
            'url': `${config.API}/admin/getproductCount`,
        });
        console.log("respData.data",respData.data);

        return {
            status: respData.data.status,
            productDetailsCount: respData.data.productDetailsCount
        }
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}


export const categoryAdd = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/categoryAdd`,
            'data':data
        });
       
       if(!respData.data.status){
         return {
            status: respData.data.status,
            errors: respData.data.errors
         }
       }else{
         return {
            status: respData.data.status,
            message: respData.data.message
         }
       }
 
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}

// Single Product update

export const categoryEdit = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/categoryEdit`,
            'data':data
        });
       
       if(!respData.data.status){
         return {
            status: respData.data.status,
            errors: respData.data.errors
         }
       }else{
         return {
            status: respData.data.status,
            message: respData.data.message
         }
       }
 
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}
// Product delete
export const CategoryDelete = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/categoryDelete`,
            'data':data
        });
       
       
         return {
            status: respData.data.status,
            message: respData.data.message
         }
 
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}
// Single Product update
export const getCategoryEditData = async (data) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.API}/admin/getCategoryEditData`,
            'data':data
        });
         return {
            status: respData.data.status,
            editData: respData.data.data
         }
    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}
