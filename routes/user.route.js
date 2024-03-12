const express = require('express');
const {userController } = require('../controller');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/signUp',userController.signUpPage)
router.post('/signUp',upload.single('profileImage'),userController.signUp);
router.get('/login',userController.loginPage)
router.post('/login',userController.login)
router.get('/logout',userController.logout)

module.exports = router;