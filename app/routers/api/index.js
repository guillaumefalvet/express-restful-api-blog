const express = require('express');
const oblogController = require('../../controllers/api/oblogController');
const {
  oblogCreateCategory, oblogModifyCategory, oblogCreatePost, oblogModifyPost,
} = require('../../validations/schemas');
const validate = require('../../validations/validate');
const middlewares = require('../../middlewares');
const controllerHandler = require('../../helpers/controllerHandler');

const router = express.Router();
/* POSTS ROUTES */
router.get('/posts', controllerHandler(oblogController.getAllPosts));

router.post('/posts', validate(oblogCreatePost), controllerHandler(oblogController.createPost));

router.get('/posts/:id', controllerHandler(oblogController.getPost));

router.patch('/posts/:id', validate(oblogModifyPost), controllerHandler(oblogController.modifyPost));

router.delete('/posts/:id', controllerHandler(oblogController.deletePost));

router.get('/posts/category/:id', controllerHandler(oblogController.getPostCategory));
/* CATEGORIES ROUTES */

router.get('/categories', controllerHandler(oblogController.getAllCategories));

router.post('/categories', validate(oblogCreateCategory), controllerHandler(oblogController.createCategory));

router.get('/categories/:id', controllerHandler(oblogController.getCategory));

router.patch('/categories/:id', validate(oblogModifyCategory), controllerHandler(oblogController.modifyCategory));

router.delete('/categories/:id', controllerHandler(oblogController.deleteCategory));

router.use(middlewares.error404);
router.use(middlewares.errorHandler);
module.exports = router;
