const fs = require("fs");
const TransactionModel = require("../models/transaction");
const json2csv = require("json2csv").parse;

class DownloadController {
  static async download(req, res) {
    TransactionModel.getAllTransactions((err, resp) => {
      if (err) {
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        let data = [...resp];

        data = data.map((el) => {
          return {
            ...el,
            "Tanggal Input": el["Tanggal Input"].toLocaleDateString(undefined, {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
          };
        });
        const csvString = json2csv(data);
        res.setHeader(
          "Content-disposition",
          "attachment; filename=transactions.csv"
        );
        res.set("Content-Type", "text/csv");
        res.status(200).send(csvString);
      }
    });
  }
}

module.exports = DownloadController;
