const client = require('./client');

module.exports = {
  async getAll(table) {
    const { rows } = await client.query(`SELECT * FROM ${table}_view;`);
    return rows;
  },
  async createOne(table, data) {
    const { rows } = await client.query(`SELECT * FROM create_${table}($1)`, [JSON.stringify(data)]);
    return rows[0];
  },
  async getOne(table, id) {
    const { rows } = await client.query(`SELECT * FROM ${table} WHERE id = $1;`, [id]);
    return rows;
  },
  async getAllWhere(table, where, id) {
    const { rows } = await client.query(`SELECT * FROM ${table} WHERE ${where} = $1`, [id]);
    return rows;
  },
  async modifyOne(table, id, data) {
    const { rows } = await client.query(`UPDATE ${table} SET ${Object.keys(data).map((key, index) => `${key} = $${index + 1}`).join(', ')}, updated_at = now() WHERE id = ${id} RETURNING *`, Object.values(data));
    return rows[0];
  },
  async deleteOne(table, id) {
    await client.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
  },

};
