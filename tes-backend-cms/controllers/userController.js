const UserModel = require("../models/user");

class UserController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username || !password) throw { name: `required_fields` };
      UserModel.login({ username, password }, (err, response) => {
        if (err) {
          return res.status(400).json({ error: `Invalid email or password` });
        } else {
          return res.status(200).json({ message: "login success" });
        }
      });
    } catch (error) {
      return res.status(400).json({ error: "All fields are required" });
    }
  }
}

module.exports = UserController;
