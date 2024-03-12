const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/bookStore').then(() => {
    console.log("db connected");
  }).catch((err) => {
    console.log(err, "from db connect");
  })
}

module.exports = dbConnect