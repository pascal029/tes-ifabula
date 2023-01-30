const { pool } = require("../config");
const queryCompanies = `
  create table if not exists "Companies"(
    "id" SERIAL primary key,
    "nama" Varchar(120) not null,
    "kode" INTEGER unique not null
  )
`;
const queryBarang = `
  CREATE TABLE IF NOT EXISTS "Barang"(
    "id" SERIAL PRIMARY KEY,
    "nama" VARCHAR(120) not null,
    "harga" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL
  )
`;

const queryTransaction = `
  CREATE TABLE IF NOT EXISTS "Transactions"(
    "id" SERIAL PRIMARY KEY,
    "Nama Perusahaan" VARCHAR(120) not null,
    "Nama Barang" VARCHAR(120) not null,
    "Total Barang" INT not null,
    "Harga Barang" INT not null,
    "Grand Total" INT not null,
    "Sisa Barang" INT not null,
    "Tanggal Input" Date not null,
    "CompanyId" INTEGER REFERENCES "Companies"(id) 
      ON DELETE CASCADE 
      ON UPDATE CASCADE,
    "BarangId" INTEGER REFERENCES "Barang"(id) 
      ON DELETE CASCADE 
      ON UPDATE CASCADE
  )
`;

pool.query(queryCompanies, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`success create table Companies`);
    pool.query(queryBarang, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`success create table Barang`);
        pool.query(queryTransaction, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Success create table Transactions`);
          }
        });
      }
    });
  }
});
