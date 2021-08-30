//  import packages
import express from 'express';
import passport from 'passport';

// import controllers
import * as userCtrl from '../controllers/user.controller';





// import validation
import * as userValid from '../validation/user.validation';





const multer = require("multer");
const router = express();
const path=require('path');
const fs=require('fs');

const passportAuth = passport.authenticate("usersAuth", { session: false });

// Admin

router.route('/login').post(userValid.loginValidate, userCtrl.userLogin);
router.route('/adduser').post(userValid.signupValidate, userCtrl.signUp);



// router.route('/getadmindata').get(passportAuth, userCtrl.getAdminData);
// router.route('/updateProfile').post(passportAuth, adminCtrl.updateProfile, adminValid.profilevalidation, adminCtrl.profileupdate);




export default router;