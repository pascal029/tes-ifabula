const { pool } = require("../../config");

class UserQuery {
  static getUser(username) {
    const query = `
            SELECT * FROM "User" u
            WHERE u."username" ILIKE '${username}'
        `;
    return query;
  }
}

module.exports = UserQuery;
