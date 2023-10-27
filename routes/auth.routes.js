const router = require("express").Router();
const {
  register,
  login,
  authenticate,
} = require("../controllers/auth.controller");
const verivyToken = require("../middlewares/auth.middlewares");

router.post("/register", register);
router.post("/login", login);
router.get("/authenticate", verivyToken, authenticate);

module.exports = router;
