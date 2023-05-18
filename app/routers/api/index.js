const express = require('express');
const postRouter = require('./post');
const categoryRouter = require('./category');
const middlewares = require('../../middlewares');

const router = express.Router();
router.use('/posts', postRouter);
router.use('/categories', categoryRouter);

router.use(middlewares.error404);
router.use(middlewares.errorHandler);
module.exports = router;
