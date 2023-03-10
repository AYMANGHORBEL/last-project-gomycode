const {
  register,
  login,
  getProfile,
  home,
} = require("../controllers/user.controller");
const express = require("express");
const { registerRules, validator } = require("../middlewares/validator");
const router = express.Router();
const { get } = require("config");
const auth = require("../middlewares/auth");
// const { default: Home } = require("../client/src/components/Home");
router.post("/register", registerRules(), validator, register);
router.post("/login", login);
// router.post("/home", home);

router.get("/getProfile", auth, getProfile);

module.exports = router;
