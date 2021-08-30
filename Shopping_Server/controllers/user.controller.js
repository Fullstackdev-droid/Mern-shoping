// import package
import mongoose from 'mongoose';

// import modal
// import Admin from '../models/Admin';
// import {
//     User
// } from '../models/User';
import Admin from '../models/Admin';
import User from '../models/User';

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

export const signUp = async (req, res) => {
    try {
        console.log("helooooooooooooooooooooooo");
        let reqBody = req.body;
        reqBody.email = reqBody.email.toLowerCase();

        let checkUser = await User.findOne({ "email": reqBody.email });

        if (checkUser) {
            return res.status(400).json({ "success": false, 'errors': { 'email': "Email is not exists" } })
        }

        let { passwordStatus, hash } = await generatePassword(reqBody.password);
        if (!passwordStatus) {
            return res.status(500).json({ "success": false, 'errors': { 'messages': "Error on server" } })
        }

        let newDoc = new User({
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


export const userLogin = async (req, res) => {
    try {
        let reqBody = req.body;
        reqBody.email = reqBody.email.toLowerCase();
        let checkUser = await User.findOne({ "email": reqBody.email });
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
        let token = new User().generateJWT(payloadData);

        return res.status(200).json({ 'success': true, 'message': "Login successfully", token })
    }
    catch (err) {

        return res.status(500).json({ "success": false, 'message': "Error on server" })
    }
}





