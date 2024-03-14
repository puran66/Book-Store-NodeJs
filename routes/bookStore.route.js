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
router.post('/change_password',userAuth,bookStoreController.changePasswordpage)
router.post('/new_password',userAuth,bookStoreController.changePassword)
router.get('/cart',userAuth,bookStoreController.showCart)
router.get('/addCartItems/:id',userAuth,bookStoreController.addCartItems)
router.get('/cart-quantity-plus/:id',userAuth,bookStoreController.addQuantity)
router.get('/cart-quantity-minus/:id',userAuth,bookStoreController.minusQuantity)
router.get('/delete-cart-item/:id',userAuth,bookStoreController.removeFromCart)
router.get('/payment',userAuth,bookStoreController.paymentPage)
router.get('/thank-you',userAuth,bookStoreController.thankYou)

module.exports = router;