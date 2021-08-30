//  import packages
import express from 'express';
import passport from 'passport';

// import controllers
import * as adminCtrl from '../controllers/admin.controller';

// import validation
import * as adminValid from '../validation/user.validation';


const router = express();
const path=require('path');
const fs=require('fs');

const passportAuth = passport.authenticate("adminAuth", { session: false });

// Admin

router.route('/login').post(adminValid.loginValidate, adminCtrl.adminLogin);
router.route('/signUp').post(adminValid.signupValidate, adminCtrl.signUp);
router.route('/getproduct').get(adminCtrl.getproduct);
router.route('/getproductCount').get(adminCtrl.getproductCount);
router.route('/categoryAdd').post(adminValid.categoryAdd, adminCtrl.categoryAdd);
router.route('/categoryEdit').post(adminValid.categoryAdd, adminCtrl.categoryEdit);
router.route('/categoryDelete').post(adminCtrl.categoryDelete);
router.route('/getCategoryEditData').post(adminCtrl.getCategoryEditData);





// router.route('/getadmindata').get(passportAuth, adminCtrl.getAdminData);
// router.route('/updateProfile').post(passportAuth, adminCtrl.updateProfile, adminValid.profilevalidation, adminCtrl.profileupdate);




export default router;