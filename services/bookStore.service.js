const mongoose = require("mongoose");
const { BookSchema, userSchema } = require("../model")
const jwt = require('jsonwebtoken')

const addBook = (body, bookimg, userId) => {
  const book = {
    bookName: body.bookName,
    bookImage: bookimg,
    bookPrice: body.bookPrice,
    publisher: userId,
  }
  return BookSchema.create(book);
}

const getData = () => {
  return BookSchema.find({}).populate('publisher');
}

const getProfile = (token) => {
  return jwt.verify(token, process.env.SECRETKEY);
}

const updateProfile = (body, profileImage) => {
  return userSchema.findByIdAndUpdate({ _id: body._id }, {
    name: body.name,
    profileImage: profileImage,
    email: body.email,
    password: body.password
  })
}

const updateToken = (user) => {

  const token = jwt.sign({ user }, process.env.SECRETKEY);

  return token;
}

const findImage = (_id) => {
  const user = userSchema.find({_id});

  return user;
}

const getEmail = (token)=>{
  const user = jwt.verify(token,process.env.SECRETKEY);
  // console.log(user.user.email);
  return user.user.email == undefined ? user.user[0].email : user.user.email;
}

module.exports = { addBook, getData, getProfile, updateProfile, updateToken ,findImage,getEmail }