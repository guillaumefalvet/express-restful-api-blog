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
  async getAllPosts(_, response) {
    const result = await oblogService.getAll('post');
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  },
  async createPost(request, response) {
    const result = await oblogService.createOne('post', request.body);
    response.status(201).json({
      status: 'success',
      content: result,
    });
  },
  async getPost(request, response) {
    const id = paramsIsNumber(request, response);
    const result = await oblogService.getOne('post', id);
    response.status(200).json({
      status: 'success',
      data: result,
    });
  },
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

  async deletePost(request, response) {
    const id = paramsIsNumber(request, response);
    await oblogService.deleteOne('post', id);
    response.status(204);
  },
  async getPostCategory(request, response) {
    const id = paramsIsNumber(request, response);
    const result = await oblogService.getAllWhere('post', 'category_id', id);
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  },
  async getAllCategories(_, response) {
    const result = await oblogService.getAll('category');
    response.status(200).json({
      status: 'succes',
      content: result,
    });
  },
  async createCategory(request, response) {
    const result = await oblogService.createOne('category', request.body);
    response.status(201).json({
      status: 'success',
      content: result,
    });
  },
  // async getCategory(request, response) {
  // },
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
  async deleteCategory(request, response) {
    const id = paramsIsNumber(request, response);
    await oblogService.deleteMultiple('category', 'post', id);
    response.status(204);
  },
};
module.exports = oblogController;
