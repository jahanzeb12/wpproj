const jwt = require("jsonwebtoken");
const User = require("../models/users");
const auth = async (req, res, next) => {
  try {
    var token = req.header("Authorization");
    // console.log(token);
    // token = await token.replace(/ /g, "");
    // console.log(token);
    // token = token.replace("Bearer ", "");
    // console.log(token);
    const decoded = jwt.verify(token, "thisismylibrary");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.send({ error: "Please authenticate" });
  }
};
module.exports = auth;
