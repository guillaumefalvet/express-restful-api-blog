const { func } = require('joi');
const oblogService = require('../../service/oblog');

const debug = require('debug')('app:coreController');

function paramsIsNumber(request, response) {
  if (/^(\d+,)*(\d+)$/.test(request.params.id)) {
    return Number(request.params.id);
  }
  response.status(200).json({
    status: 'error',
    message: 'only numbers as id',
  });
  return null;
}
class CoreController {
  constructor(tableName) {
    CoreController.tableName = tableName;
  }

  async getAll(_, response) {
    debug(`getAll: ${CoreController.tableName}`);
    const result = await oblogService.getAll(CoreController.tableName);
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  }

  async getOne(request, response) {
    const id = paramsIsNumber(request, response);
    debug(`getOne: ${CoreController.tableName}:${id}`);
    const result = await oblogService.getOne(CoreController.tableName, id);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  }

  async insertOne(request, response) {
    debug(`insertOne: ${CoreController.tableName}`);
    const result = await oblogService.createOne(CoreController.tableName, request.body);
    response.status(201).json({
      status: 'success',
      content: result,
    });
  }

  async modifyOne(request, response) {
    const id = paramsIsNumber(request, response);
    debug(`modifyOne: ${CoreController.tableName}:${id}`);

    request.body.id = id;
    const result = await oblogService.modifyOne(CoreController.tableName, request.body);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  }

  async deleteOne(request, response) {
    const id = paramsIsNumber(request, response);
    debug(`deleteOne: ${CoreController.tableName}:${id}`);
    await oblogService.deleteOne(CoreController.tableName, id);
    response.status(204);
  }
}

module.exports = CoreController;
