// import package
import mongoose from 'mongoose';

// import modal
// import Admin from '../models/Admin';
// import {
//     User
// } from '../models/User';
import Admin from '../models/Admin';
import User from '../models/User';
import Product from '../models/product'

// import cofig
import config from '../config';

// import lib
import bcrypt from 'bcrypt';
// import { comparePassword } from '../lib/bcrypt';
import { generatePassword, comparePassword } from '../lib/bcrypt';


import multer from 'multer';
import path from 'path';



const ObjectId = mongoose.Types.ObjectId;





/**
 * Admin List
 * URL : /adminapi/admin
 * METHOD: GET
*/


export const getAdminData = async (req, res) => {

  
    User.findOne({ _id: req.user.id }, (err, userData) => {
        if (err) {
          return res
            .status(200)
            .json({ success: false, errors: { messages: "Error on server" } });
        }
        
        return res
          .status(200)
          .json({ success: true, userValue: userData });
      });
  }


  export const updateProfile = (req, res, next) => {
    //console.log(req.user.id,"-----------------------------------------------------------");
    upload(req, res, (err) => {
if(err)
{
    console.log("errrrrrrrrrrr",err);
}

      return next();
    });
  }

export const signUp = async (req, res) => {
    try {
        console.log("helooooooooooooooooooooooo");
        let reqBody = req.body;
        reqBody.email = reqBody.email.toLowerCase();

        let checkUser = await Admin.findOne({ "email": reqBody.email });

        if (checkUser) {
            return res.status(400).json({ "success": false, 'errors': { 'email': "Email is not exists" } })
        }

        let { passwordStatus, hash } = await generatePassword(reqBody.password);
        if (!passwordStatus) {
            return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
        }

        let newDoc = new Admin({
            'name': reqBody.username,
            'email': reqBody.email,
            'password': hash,
        })

        await newDoc.save();
        return res.status(200).json({ 'success': true, 'message': "Signup successfully enjoy your shopping" })
    } catch (err) {
        console.log("err",err);
        return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
    }
}


export const adminLogin = async (req, res) => {
    try {
        let reqBody = req.body;
        reqBody.email = reqBody.email.toLowerCase();
        let checkUser = await Admin.findOne({ "email": reqBody.email });
        if (!checkUser) {
            return res.status(404).json({ "success": false, 'errors': { 'email': "Email not found" } })
        }

        let { passwordStatus } = await comparePassword(reqBody.password, checkUser.password);
        if (!passwordStatus) {
            return res.status(400).json({ "success": false, 'errors': { "password": "Password incorrect" } })
        }

        let payloadData = {
            "_id": checkUser._id,
            // "restriction": checkUser.restriction,
            "role": checkUser.role
        }
        let token = new Admin().generateJWT(payloadData);

        return res.status(200).json({ 'success': true, 'message': "Login successfully", token })
    }
    catch (err) {

        return res.status(500).json({ "success": false, 'message': "Error on server" })
    }
}


export const onlineproductAdd = async (req, res) => {
    try {
        console.log("helooooooooooooooooooooooo");
        let reqBody = req.body;
        reqBody.email = reqBody.email.toLowerCase();

        let checkUser = await Admin.findOne({ "email": reqBody.email });

        if (checkUser) {
            return res.status(400).json({ "success": false, 'errors': { 'email': "Email is not exists" } })
        }

        let { passwordStatus, hash } = await generatePassword(reqBody.password);
        if (!passwordStatus) {
            return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
        }

        let newDoc = new Admin({
            'name': reqBody.username,
            'email': reqBody.email,
            'password': hash,
        })

        await newDoc.save();
        return res.status(200).json({ 'success': true, 'message': "Signup successfully enjoy your shopping" })
    } catch (err) {
        console.log("err",err);
        return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
    }
}

export const getproduct = async (req,res)=>{
    Product.find({}, (err, productData) => {
      if (err) {
        return res
          .status(200)
          .json({ success: false, errors: { messages: "Error on server" } });
      }
      
      return res
        .status(200)
        .json({ success: true, productDetails: productData });
    });
}
export const getproductCount = async (req,res)=>{
    Product.find({}, (err, productData) => {
      if (err) {
        return res
          .status(200)
          .json({ success: false, errors: { messages: "Error on server" } });
      }
      
      return res
        .status(200)
        .json({ success: true, productDetailsCount: productData });
    });
}


export const categoryAdd = async (req, res) => {
    try {
        let reqBody = req.body, checkUser;
        let productExist = await Product.find({productName:reqBody.productName});
        if(productExist.length!=0){

            console.log(productExist,"dadadadadsa");
            // res.json({"status": 500, errors: {"productNameErr": "Product name is already exist!"}})
            // res.json({"status":false,"errors":{"productNameErr":"Product name is already exist!"}})
            return res.json({"status":false,"errors":{"productNameErr":"Product name is already exist!"}})
        }
        else{

            const newCategory = new Product({
            productName:reqBody.productName,
            productPrice:reqBody.productPrice,
            productDescription:reqBody.productDescription,
            })
            let saveData = await newCategory.save()
            if(saveData){
            return res.status(200).json({ 'status': true, 'message': "Product Added Successfully" })
            }
        }
    }
    catch (err) {
        console.log("err",err);
        return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
    }
}
  
export const categoryEdit = async (req, res) => {
    try {
        let reqBody = req.body;
        var update = {
        productName:reqBody.productName,
        productPrice:reqBody.productPrice,
        productDescription:reqBody.productDescription
        }
        let updateData = await Product.findOneAndUpdate({_id:reqBody.id},{$set:update},{new:true})
        if(updateData){
        return res.json({status:true,message:"Product Updated Successfully"})
        }
    }
    catch (err) {
        return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
    }
}

export const categoryDelete = async (req, res) => {
    try {
        let reqBody = req.body
        let deleteData = await Product.deleteOne({_id:reqBody.id})
        if(deleteData){
        return res.json({status:true,message:"Product Deleted Successfully"})
        }
    }
    catch (err) {
        return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
    }
}

export const getCategoryEditData = async (req, res) => {
    try {
        let data = await Product.findOne({_id:req.body.id});
        return res.status(200).json({ 'status': true, 'data': data })
    }
    catch (err) {
      return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
    }
  }
