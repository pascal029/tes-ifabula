const router = require("express").Router();
const UserController = require("../controllers/userController");
const CompanyController = require("../controllers/companyController");
const TransactionController = require("../controllers/transactionController");
const DownloadController = require("../controllers/downloadController");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/login", UserController.login);
router.post("/input-perusahaan", CompanyController.insertCompany);
router.post("/input-transaksi", TransactionController.inputTransaction);
router.get("/input-transaksi", DownloadController.download);

module.exports = router;
