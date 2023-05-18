const oblogService = require('../../service/oblog');

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
const oblogController = {
  /**
   * API GET /api/posts
   * responds with all entries from a table
   * @param {Object} request
   * @param {Object} response
   */
  async getAllPosts(_, response) {
    const result = await oblogService.getAll('post');
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  },
  /**
   * API GET /api/posts/:id
   * responds with one entry from a table
   * @param {Object} request
   * @param {Object} response
   */
  async getPost(request, response) {
    const id = paramsIsNumber(request, response);
    const result = await oblogService.getOne('post', id);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  },
  /**
   * API POST /api/posts
   * create one entry in a table
   * @param {Object} request
   * @param {Object} response
   */
  async createPost(request, response) {
    const result = await oblogService.createOne('post', request.body);
    response.status(201).json({
      status: 'success',
      content: result,
    });
  },
  /**
   * API PATCH /api/posts/:id
   * modify one entry in a table
   * @param {Object} request
   * @param {Object} response
   */
  async modifyPost(request, response) {
    const id = paramsIsNumber(request, response);
    const {
      // eslint-disable-next-line camelcase
      slug, title, excerpt, content, category_id,
    } = request.body;
    const requestedModification = {};
    if (slug) {
      requestedModification.slug = slug;
    }
    if (title) {
      requestedModification.title = title;
    }
    if (excerpt) {
      requestedModification.excerpt = excerpt;
    }
    if (content) {
      requestedModification.content = content;
    }
    // eslint-disable-next-line camelcase
    if (category_id) {
      // eslint-disable-next-line camelcase
      requestedModification.category_id = category_id;
    }
    requestedModification.id = id;
    const result = await oblogService.modifyOne('post', requestedModification);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  },
  /**
   * API DELETE /api/posts/:id
   * remove one entry in a table
   * @param {Object} request
   * @param {Object} response
   */
  async deletePost(request, response) {
    const id = paramsIsNumber(request, response);
    await oblogService.deleteOne('post', id);
    response.status(204);
  },
  /**
   * API GET /api/posts/category/:id
   * responds with all entries from a table
   * @param {Object} request
   * @param {Object} response
   */
  async getPostCategory(request, response) {
    const id = paramsIsNumber(request, response);
    const result = await oblogService.getAllWhere('post', 'category_id', id);
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  },
  /**
   * API GET /api/categories
   * responds with all entries from a table
   * @param {Object} request
   * @param {Object} response
   */
  async getAllCategories(_, response) {
    const result = await oblogService.getAll('category');
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  },
  /**
   * API POST /api/categories
   * create one entry in a table
   * @param {Object} request
   * @param {Object} response
   */
  async createCategory(request, response) {
    const result = await oblogService.createOne('category', request.body);
    response.status(201).json({
      status: 'success',
      content: result,
    });
  },
  /**
   * API GET /api/categories/:id
   * responds with one entry from a table
   * @param {Object} request
   * @param {Object} response
   */
  async getCategory(request, response) {
    const id = paramsIsNumber(request, response);
    const result = await oblogService.getOne('category', id);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  },
  /**
   * API PATCH /api/categories/:id
   * modify one entry in a table
   *
   * @param {Object} request
   * @param {Object} response
   */
  async modifyCategory(request, response) {
    const id = paramsIsNumber(request, response);
    const { label, route } = request.body;
    const requestedModification = {};
    if (route) {
      requestedModification.route = route;
    }
    if (label) {
      requestedModification.label = label;
    }
    requestedModification.id = id;
    const result = await oblogService.modifyOne('category', requestedModification);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  },
  /**
   * API DELETE /api/categories/:id
   * remove one entry in a table
   *
   * @param {Object} request
   * @param {Object} response
   */
  async deleteCategory(request, response) {
    const id = paramsIsNumber(request, response);
    await oblogService.deleteMultiple('category', 'post', id);
    response.status(204);
  },
};
module.exports = oblogController;
