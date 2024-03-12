const { bookStoreServices, userServices, emailServices } = require("../services");
const otpGenerator = require('otp-generator');
const sendEmail = require("../services/email.service");
const session = require('express-session')

const bookStore = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      throw new Error("login first!")
    }
    const user = await userServices.findUserByToken(token);
    // console.log(user);
    const profileImage = user.user.profileImage == undefined ? user.user[0].profileImage : user.user.profileImage;
    // console.log(profileImage);

    const data = await bookStoreServices.getData();
    // console.log(data);

    res.status(200).render('bookStore', { data: data, profileImage: profileImage })
  }
  catch (err) {
    console.log(err);
  }
}

const addBookPage = async (req, res) => {
  try {
    res.status(200).render('addBook')
  }
  catch (err) {
    console.log(err);
  }
}

const addBook = async (req, res) => {
  try {
    const body = req.body;
    const img = req.file.path;
    const token = req.cookies.token;

    // console.log(body,img);
    if (!body || !img || !token) {
      throw new Error("Missing Data");
    }

    const bookImage = img.replace(/\\/g, "/").replace("D:/Full Stack Development/book-store-detail/public", "http://localhost:8000/");

    // console.log(bookImage);

    const userId = await userServices.findId(token);

    const book = await bookStoreServices.addBook(body, bookImage, userId);

    res.status(201).redirect('/book-store');
  }
  catch (err) {
    console.log(err);
  }
}

const profile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error("login first");
    }

    const getUser = await bookStoreServices.getProfile(token);
    const user = getUser.user[0] == undefined ? getUser.user : getUser.user[0]
    // console.log(user);
    const profileImage = getUser.user[0].profileImage == undefined ? getUser.user.profileImage : getUser.user[0].profileImage;


    res.status(200).render('profilePage', { user: user, profileImage: profileImage })
  }
  catch (err) {
    console.log(err);
  }
}

const editProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error("login first");
    }

    const user = await bookStoreServices.getProfile(token);

    const profileImage = user.user.profileImage
    // console.log(profileImage);

    res.status(200).render('editProfile', { user: user.user, profileImage: profileImage })
  }
  catch (err) {
    console.log(err);
  }
}

const updateProfile = async (req, res) => {
  try {
    const body = req.body;
    const img = req.file.path
    // console.log(body, img);
    if (!body || !img) {
      throw new Error("inputs required")
    }

    const profileImage = img.replace(/\\/g, "/").replace("D:/Full Stack Development/book-store-detail/public", "http://localhost:8000");
    console.log(profileImage);

    const updated = await bookStoreServices.updateProfile(body, profileImage);

    const updatedBody = {
      _id: body._id,
      profileImage: profileImage,
      name: body.name,
      email: body.email,
      password: body.password
    }
    // console.log(updatedBody);

    const updateToken = await bookStoreServices.updateToken(updatedBody);

    console.log(updateToken);

    res.status(200).cookie('token', updateToken).redirect('/profile');

    // // res.status(201).redirect('/profile');
  }
  catch (err) {
    console.log(err.message);
  }
}

const otpPage = async (req, res) => {
  try {
    res.status(200).render('otpValidate',{message:""})
  }
  catch (err) {
    console.log(err);
  }
}

const sendOtp = async (req, res) => {
  try {
    const token = req.cookies.token;

    const email = await bookStoreServices.getEmail(token);
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

    const senddata = await sendEmail(email, 'change password otp', otp);
    // console.log(senddata);

    req.session.otp = otp;

    res.status(200).render('otpValidate',{message:"OTP has been sent successfully to your registered email."})
  }
  catch(err){
    console.log(err);
  }
}

const changePasswordpage = (req,res) =>{
  try{
    const body = req.body;
    console.log(body);
  }catch(err){
    console.log(err);
  }
}

module.exports = { bookStore, addBookPage, addBook, profile, editProfile, updateProfile, otpPage,sendOtp ,changePasswordpage };