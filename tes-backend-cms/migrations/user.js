const { pool } = require("../config");
const columnBarang = `
    CREATE TABLE IF NOT EXISTS "User"(
        "id" SERIAL PRIMARY KEY,
        "username" VARCHAR(120) not null,
        "password" VARCHAR(120) not null
    )
`;

pool.query(columnBarang, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`success create table User`);
  }
});
