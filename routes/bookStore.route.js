const express = require('express');
const { bookStoreController } = require('../controller');
const userAuth = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/book-store', userAuth, bookStoreController.bookStore)
router.get('/addBook', userAuth, bookStoreController.addBookPage)
router.post('/addBook', userAuth, upload.single('bookImage'), bookStoreController.addBook)
router.get('/profile', userAuth, bookStoreController.profile)
router.get('/edit-profile', userAuth, bookStoreController.editProfile)
router.post('/update-profile', userAuth, upload.single('profileImage'), bookStoreController.updateProfile)
router.get('/otpValidate',userAuth,bookStoreController.otpPage)
router.get('/generate_otp',userAuth,bookStoreController.sendOtp);
router.get('/change_password',userAuth,bookStoreController.changePasswordpage)

module.exports = router;