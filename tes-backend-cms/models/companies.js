const CompanyQuery = require("./queries/companyQueries");
const { pool } = require("../config/index");
class CompanyModel {
  static async findCompany(input, cb) {
    pool.query(CompanyQuery.find(input), (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  }

  static async inputCompany(input, cb) {
    const { nama, kode } = input;
    let insertQuery = CompanyQuery.inputCompany();

    pool.query(insertQuery, [nama, kode], (err, resp) => {
      if (err) return cb({ name: err.constraint });
      let company = resp.rows[0];
      return cb(null, company);
    });
  }
}

module.exports = CompanyModel;
