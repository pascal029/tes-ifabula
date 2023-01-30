const { pool } = require("../config/index");

const queryUser = `INSERT INTO "User"(username, password) VALUES ($1, $2)`;

pool.query(queryUser, ["user1", "usersatu"], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success seed");
  }
});
