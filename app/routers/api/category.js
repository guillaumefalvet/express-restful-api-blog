const express = require('express');
const oblogController = require('../../controllers/api/oblogController');
const { oblogCreateCategory, oblogModifyCategory } = require('../../validations/schemas');
const controllerHandler = require('../../helpers/controllerHandler');
const validate = require('../../validations/validate');

const router = express.Router();
/**
 * a category type
 *
 * @typedef {object} Category
 * @property {number} id - category id
 * @property {string} label - category label
 * @property {string} route - category route
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/categories
 *
 * @summary get all categories
 * @tags Categories - The blog's posts categories
 *
 * @return {array<Category>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(oblogController.getAllCategories));
/**
 * POST /api/categories
 *
 * @summary create a new category
 * @tags Categories
 *
 * @param {Category} request.body - category
 *
 * @return {Category} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(oblogCreateCategory), controllerHandler(oblogController.createCategory));
/**
 * GET /api/categories/{id}
 *
 * @summary get a category
 * @tags Categories
 *
 * @param {number} id.path - category id
 *
 * @return {Category} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id', controllerHandler(oblogController.getCategory));
/**
 * PATCH /api/categories/{id}
 *
 * @summary modify a category
 * @tags Categories
 *
 * @param {number} id.path - category id
 * @param {string} request.route - category route
 * @param {string} request.label - category label
 *
 * @return {Category} 200 - success response
 * @return {object} 500 - internal server error
 */
router.patch('/:id', validate(oblogModifyCategory), controllerHandler(oblogController.modifyCategory));
/**
 * DELETE /api/categories/{id}
 *
 * @summary delete a category
 * @tags Categories
 *
 * @param {number} id.path - category id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id', controllerHandler(oblogController.deleteCategory));

module.exports = router;
