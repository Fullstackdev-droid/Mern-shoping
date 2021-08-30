// import package
import mongoose from 'mongoose';

// import helpers
import isEmpty from '../lib/isEmpty';


/**
 * User Login
 * URL : /User/login
 * METHOD: POST
 * BODY : email, password
*/
export const loginValidate = (req, res, next) => {
    let errors = {}, reqBody = req.body;

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;


    if (isEmpty(reqBody.email)) {
        errors.email = "Email field is required";
    } else if (!(emailRegex.test(reqBody.email))) {
        errors.email = "Email is invalid";
    }

    if (!isEmpty(errors)) {
        return res.status(400).json({ "errors": errors })
    }

    return next();
    
}

export const signupValidate = (req, res, next) => {
    let errors = {}, reqBody = req.body;

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;

    if (isEmpty(reqBody.username)) {
        errors.username = "Username field is required";
    }
    if (isEmpty(reqBody.email)) {
        errors.email = "Email field is required";
    } else if (!(emailRegex.test(reqBody.email))) {
        errors.email = "Email is invalid";
    }
    if (isEmpty(reqBody.password)) {
        errors.password = "Password field is required";
    }

    if (!isEmpty(errors)) {
        return res.status(400).json({ "errors": errors })
    }

    return next();
    
}

export const productAdd = (req, res, next) => {
    let errors = {}, reqBody = req.body;

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;

    if (isEmpty(reqBody.username)) {
        errors.username = "Username field is required";
    }
    if (isEmpty(reqBody.email)) {
        errors.email = "Email field is required";
    } else if (!(emailRegex.test(reqBody.email))) {
        errors.email = "Email is invalid";
    }
    if (isEmpty(reqBody.password)) {
        errors.password = "Password field is required";
    }

    if (!isEmpty(errors)) {
        return res.status(400).json({ "errors": errors })
    }

    return next();
    
}

export const categoryAdd = (req, res, next) => {
    let errors = {}, reqBody = req.body;
    let priceRegex =/^[0-9]*$/;

    if (isEmpty(reqBody.productName)) {
        errors.productNameErr = "Product field is required";
    } 

    if (isEmpty(reqBody.productPrice)) {
        errors.productPriceErr = "Price field is required";
    }else if (!(priceRegex.test(reqBody.productPrice))) {
        errors.productPriceErr = "please enter number only for price";
    }
    if (isEmpty(reqBody.productDescription)) {
        errors.productDescriptionErr = "Product Description field is required";
    } 

    if (!isEmpty(errors)) {
        return res.status(200).json({ status:false,"errors": errors })
    }

    return next();
}

