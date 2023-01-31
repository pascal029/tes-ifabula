const CompanyModel = require("../models/companies");

class CompanyController {
  static async insertCompany(req, res) {
    try {
      const { nama, kode } = req.body;
      if (!nama || !kode) throw { name: "input required" };
      await CompanyModel.inputCompany({ nama, kode }, (err, companyData) => {
        if (err) {
          return res.status(400).json({ error: err.name });
        } else {
          return res.status(201).json(companyData);
        }
      });
    } catch (error) {
      return res.status(400).json({ error: "input required" });
    }
  }
}

module.exports = CompanyController;
