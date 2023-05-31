const debug = require('debug')('app:postController');
const isRequestParamIsANumber = require('../../helpers/isRequestParamIsANumber');
const oblogService = require('../../service/oblog');
const CoreController = require('./CoreController');

class PostController extends CoreController {
  static tableName = 'post';

  constructor() {
    super(PostController.tableName);
    debug(`${this.constructor.tableName}Controller created`);
  }

  async getPostCategory(request, response) {
    const id = isRequestParamIsANumber(request);
    debug(`getPostCategory: ${CoreController.tableName}:${id}`);
    const result = await oblogService.getAllWhere(PostController.tableName, 'category_id', id);
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  }
}

const postController = new PostController();
module.exports = postController;
