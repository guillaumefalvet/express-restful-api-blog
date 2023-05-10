const dataMapper = require('../models/dataMapper');

const oblogService = {
  async getAll(table) {
    const results = await dataMapper.getAll(table);
    return results;
  },
  async createOne(table, data) {
    const result = await dataMapper.createOne(table, data);
    return result;
  },
  async getOne(table, id) {
    const result = await dataMapper.getOne(table, id);
    if (!result.length) {
      const err = new Error(`Couldn't find any ${table} at id: ${id}`);
      err.code = 404;
      throw err;
    }
    return result;
  },
  async modifyOne(table, id, data) {
    const result = await dataMapper.modifyOne(table, id, data);
    return result;
  },
  async deleteOne(table, id) {
    await dataMapper.deleteOne(table, id);
  },
  async getAllWhere(table, where, id) {
    const result = dataMapper.getAllWhere(table, where, id);
    return result;
  },
  async deleteMultiple(parentTable, childTable, id) {
    const childrenTable = await this.getAllWhere('post', 'category_id', id);
    const promiseList = [];
    childrenTable.forEach((result) => {
      promiseList.push(this.deleteOne(childTable, result.id));
    });
    await Promise.all(promiseList);
    await this.deleteOne(parentTable, id);
  },

};
module.exports = oblogService;
