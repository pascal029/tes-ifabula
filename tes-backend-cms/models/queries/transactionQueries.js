class TransactionQuery {
  static find(input) {
    const query = `
      SELECT * FROM "Transactions" t WHERE t."CompanyId" = ${input.CompanyId} AND t."Nama Barang" ILIKE '${input["Nama Barang"]}'
    `;
    return query;
  }

  static inputTransaction(input) {
    const query = `
      INSERT INTO "Transactions" 
        ("Nama Perusahaan", "Nama Barang", "Total Barang", "Harga Barang", "Grand Total", "Sisa Barang", "Tanggal Input", "CompanyId", "BarangId") 
        VALUES($1, $2, $3, $4, $5, $6, $7 , $8, $9)
        returning *
    `;
    return query;
  }
  static findAll() {
    const query = `
      SELECT 
        "Nama Perusahaan", 
        "Nama Barang", 
        "Total Barang", 
        "Harga Barang", 
        "Grand Total", 
        "Sisa Barang", 
        "Tanggal Input"
      from "Transactions"
    `;
    return query;
  }
}

module.exports = TransactionQuery;
