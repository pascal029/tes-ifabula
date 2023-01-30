const { pool } = require("../config");
const columnBarang = `
    CREATE TABLE IF NOT EXISTS "Barang"(
        "id" SERIAL PRIMARY KEY,
        "nama" VARCHAR(120) not null,
        "harga" INT NOT NULL,
        "stock" INT NOT NULL
    )
`;

pool.query(columnBarang, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`success create table barang`);
  }
});
