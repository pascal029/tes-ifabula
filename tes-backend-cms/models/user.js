const { pool } = require("../config/index");
const UserQuery = require("./queries/userQueries");

class UserModel {
  static async login(input, cb) {
    await pool.query(UserQuery.getUser(input.username), (err, res) => {
      if (err) {
        console.log(err);
      } else {
        let user = res.rows[0];
        if (!user || input.password != user.password) return cb("err");
        else cb(null, user);
      }
    });
  }
}

module.exports = UserModel;
