const { pool } = require("../config/index");
const BarangQuery = require("./queries/barangQueries");

class Barang {
  static input(input, cb) {
    pool.query(
      BarangQuery.input(),
      [input.namaBarang, input.hargaBarang, +input.totalBarang],
      (err, resp) => {
        if (err) {
          return cb(err);
        } else {
          return cb(null, resp.rows[0]);
        }
      }
    );
  }

  static update(input, cb) {
    pool.query(BarangQuery.updateStock(input), (err, resp) => {
      if (err) return cb(err);
      return cb(null, resp.rows[0]);
    });
  }
}

module.exports = Barang;
