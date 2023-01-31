const { pool } = require("../config/index.js");
const TransactionQuery = require("./queries/transactionQueries");

class TransactionModel {
  static getTransaction(input, cb) {
    pool.query(TransactionQuery.find(input), (err, resp) => {
      if (err) return cb(err);

      let transaction = resp.rows[0];
      return cb(null, transaction);
    });
  }

  static inputTransaction(input, cb) {
    pool.query(
      TransactionQuery.inputTransaction(),
      [
        input["Nama Perusahaan"],
        input["Nama Barang"],
        input["Total Barang"],
        input["Harga Barang"],
        input["Grand Total"],
        input["Sisa Barang"],
        input["Tanggal Barang"],
        input.CompanyId,
        input.BarangId,
      ],
      (err, resp) => {
        if (err) {
          return cb(err);
        } else {
          return cb(null, resp.rows[0]);
        }
      }
    );
  }

  static getAllTransactions(cb) {
    pool.query(TransactionQuery.findAll(), (err, resp) => {
      if (err) {
        cb(err);
      } else {
        cb(null, resp.rows);
      }
    });
  }
}

module.exports = TransactionModel;
