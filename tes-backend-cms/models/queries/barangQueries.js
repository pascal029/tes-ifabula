class BarangQuery {
  static input() {
    const query = `
            INSERT INTO "Barang"("nama", "harga", "stock") VALUES ($1, $2, $3) returning *
        `;
    return query;
  }

  static updateStock(input) {
    const { BarangId, totalBarang } = input;
    const query = `
      UPDATE "Barang"
      SET stock = stock + ${totalBarang}
      WHERE id = ${BarangId}
      returning *
    `;
    return query;
  }
}

module.exports = BarangQuery;
