class CompanyQuery {
  static find(input) {
    const query = `
      SELECT * FROM "Companies" c 
        WHERE c."nama" ILIKE '${input.nama}'
    `;

    return query;
  }
  static inputCompany() {
    const query = `
      INSERT INTO "Companies"(nama, kode) VALUES($1, $2) returning *
    `;

    return query;
  }
}

module.exports = CompanyQuery;
