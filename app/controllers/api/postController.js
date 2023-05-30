const debug = require('debug')('app:postController');
const CoreController = require('./CoreController');

class PostController extends CoreController {
  static tableName = 'post';

  constructor() {
    super(PostController.tableName);
    debug(`${this.constructor.tableName}Controller created`);
  }
}
const postController = new PostController();
module.exports = postController;
