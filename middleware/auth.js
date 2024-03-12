const jwt = require('jsonwebtoken')

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.redirect('/v1/login')
    }

    const verified = await jwt.verify(token, process.env.SECRETKEY);

    next();

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = userAuth;