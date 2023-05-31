const express = require('express');
const debug = require('debug')('app:router:post');
const { oblogCreatePost, oblogModifyPost } = require('../../validations/schemas');
const controllerHandler = require('../../helpers/controllerHandler');
const validate = require('../../validations/validate');
const { postController } = require('../../controllers/api');

const router = express.Router();
/**
 * a post type
 *
 * @typedef {object} Post
 * @property {number} id - post id
 * @property {string} slug - post slug
 * @property {string} title - post title
 * @property {string} excerpt - post excerpt
 * @property {string} content - post content
 * @property {string} category_id - post category_id
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/posts
 *
 * @summary get all posts
 * @tags Posts - The blog's posts
 *
 * @return {array<Post>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(postController.getAll));
/**
 * POST /api/posts
 *
 * @summary create a new post
 * @tags Posts
 *
 * @param {Post} request.body - post
 *
 * @return {Post} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(oblogCreatePost), controllerHandler(postController.insertOne));
/**
 * GET /api/posts/{id}
 *
 * @summary get a post
 * @tags Posts
 *
 * @param {number} id.path - post id
 *
 * @return {Post} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id', controllerHandler(postController.getOne));
/**
 * PATCH /api/posts/{id}
 *
 * @summary modify a new post
 * @tags Posts
 *
 * @param {number} id.path - post id
 * @param {Post} request.body - post
 *
 * @return {Post} 200 - success response
 * @return {object} 500 - internal server error
 */
router.patch('/:id', validate(oblogModifyPost), controllerHandler(postController.modifyOne));
/**
 * DELETE /api/posts/{id}
 *
 * @summary delete a post
 * @tags Posts
 *
 * @param {number} id.path - post id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id', controllerHandler(postController.deleteOne));
/**
 * GET /api/posts/category/{id}
 *
 * @summary get all posts from a specific category_id
 * @tags Posts
 *
 * @param {number} id.path - category id
 *
 * @return {array<Post>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/category/:id', controllerHandler(postController.getPostCategory));

module.exports = router;
