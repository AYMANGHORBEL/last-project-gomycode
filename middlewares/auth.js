const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const User = require("../models/User");

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ msg: "no token!" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "unauthorized!" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = auth;
