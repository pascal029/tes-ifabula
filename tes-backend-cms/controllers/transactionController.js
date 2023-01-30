const TransactionModel = require("../models/transaction");
const CompanyModel = require("../models/companies");
const Barang = require("../models/barang");

class TransactionController {
  static inputTransaction(req, res) {
    const { namaPerusahaan, namaBarang, hargaBarang, totalBarang } = req.body;

    CompanyModel.findCompany({ nama: namaPerusahaan }, (err, resp) => {
      if (err) {
        return res.status(500).json({ message: "internal server error" });
      } else {
        const company = resp[0];
        let barang;
        TransactionModel.getTransaction(
          { CompanyId: company.id, "Nama Barang": namaBarang },
          (err, resp) => {
            if (err) {
              return res.status(500).json({ message: "internal server error" });
            } else {
              if (!resp) {
                Barang.input(
                  { namaBarang, hargaBarang, totalBarang },
                  (err, resp) => {
                    if (err) {
                      console.log(err);
                    } else {
                      let barang = resp;
                      const inputInsert = {
                        "Nama Perusahaan": company.nama,
                        "Nama Barang": barang.nama,
                        "Total Barang": totalBarang,
                        "Harga Barang": hargaBarang,
                        "Grand Total": totalBarang * hargaBarang,
                        "Sisa Barang": barang.stock,
                        "Tanggal Barang": new Date(),
                        CompanyId: company.id,
                        BarangId: barang.id,
                      };

                      TransactionModel.inputTransaction(
                        inputInsert,
                        (err, resp) => {
                          if (err) {
                            return res
                              .status(500)
                              .json({ message: "internal server error" });
                          } else {
                            res
                              .status(201)
                              .json({ message: "Success input Transaction" });
                          }
                        }
                      );
                    }
                  }
                );
              } else {
                Barang.update(
                  { BarangId: resp.BarangId, totalBarang },
                  (err, resp) => {
                    if (err) {
                      console.log(err);
                    } else {
                      let barang = resp;
                      const inputInsert = {
                        "Nama Perusahaan": company.nama,
                        "Nama Barang": barang.nama,
                        "Total Barang": totalBarang,
                        "Harga Barang": hargaBarang,
                        "Grand Total": totalBarang * hargaBarang,
                        "Sisa Barang": barang.stock,
                        "Tanggal Barang": new Date(),
                        CompanyId: company.id,
                        BarangId: barang.id,
                      };
                      TransactionModel.inputTransaction(
                        inputInsert,
                        (err, resp) => {
                          if (err) {
                            return res
                              .status(500)
                              .json({ message: "internal server error" });
                          } else {
                            res
                              .status(201)
                              .json({ message: "Success input Transaction" });
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          }
        );
      }
    });
  }
}

module.exports = TransactionController;
