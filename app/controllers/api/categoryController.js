const debug = require('debug')('app:postController');
const isRequestParamIsANumber = require('../../helpers/isRequestParamIsANumber');
const oblogService = require('../../service/oblog');
const CoreController = require('./CoreController');

class CategoryController extends CoreController {
  static tableName = 'category';

  constructor() {
    super(CategoryController.tableName);
    debug(`${this.constructor.tableName}Controller created`);
  }

  async deleteMultiple(request, response) {
    const id = isRequestParamIsANumber(request);
    debug(`deleteMultiple: ${CoreController.tableName}:${id}`);
    await oblogService.deleteMultiple(CategoryController.tableName, 'post', id);
    response.status(204);
  }
}

const postController = new CategoryController();
module.exports = postController;
