const client = require('./client');

module.exports = {
  async getAll(table) {
    // const { rows } = await client.query(`SELECT * FROM ${table} JOIN category ON category_id = category.id ORDER BY ${table}.id;`);
    // return rows;
    const { rows } = await client.query(`SELECT * FROM ${table} ORDER BY id;`);
    return rows;
  },
  async createOne(table, data) {
    // eslint-disable-next-line max-len
    // const { rows } = await client.query(`INSERT INTO ${table} ("slug", "title", "excerpt", "content", "category_id") VALUES ($1,$2,$3,$4,$5) RETURNING *, "id";`, [data.slug, data.title, data.excerpt, data.content, data.category_id]);
    // return rows;
    console.log(Object.keys(data).join(', '));
    const { rows } = await client.query(`INSERT INTO ${table} (${Object.keys(data).join(', ')}) VALUES (${Object.keys(data).map((key, index) => `$${index + 1}`).join(', ')}) RETURNING *`, Object.values(data));
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
    // const keys = Object.keys(obj);
    // const values = [];
    // let query = 'UPDATE post SET ';
    // let index = 1;

    // keys.forEach((key) => {
    //   if (obj[key] !== undefined) {
    //     query += `${key} = $${index}, `;
    //     values.push(obj[key]);
    //     index += 1;
    //   }
    // });

    // // query = query.slice(0, -2); // Remove the last comma and space
    // query += `updated_at = now() WHERE id = $${index} RETURNING *;`;
    // values.push(id);
    // console.log(query);
    // const result = await client.query(query, values);
    // return result;

    const { rows } = await client.query(`UPDATE ${table} SET ${Object.keys(data).map((key, index) => `${key} = $${index + 1}`).join(', ')}, updated_at = now() WHERE id = ${id} RETURNING *`, Object.values(data));
    return rows[0];
  },
  async deleteOne(table, id) {
    await client.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
  },

};
