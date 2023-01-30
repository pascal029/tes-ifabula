const router = require("express").Router();
const UserController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/login", UserController.login);

module.exports = router;
