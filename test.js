/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
class CoreController {
  // constructor(table) {
  //   this.table = table;
  // }

  getAll() {
    console.log(`${this.table}reee`);
  }
}
class PostController extends CoreController {
  table = 'yes but ';

  // constructor() {
  //   super();
  // }
}

const postController = new PostController();
postController.getAll();
