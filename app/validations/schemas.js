const joi = require('joi');

const oblogCreateCategory = joi.object({
  label: joi.string(),
  route: joi.string(),
}).required().min(2);

const oblogModifyCategory = joi.object({
  label: joi.string(),
  route: joi.string(),
}).required().min(1);

const oblogCreatePost = joi.object({
  slug: joi.string(),
  title: joi.string(),
  excerpt: joi.string(),
  content: joi.string(),
  category_id: joi.number(),
}).required().min(5);

const oblogModifyPost = joi.object({
  slug: joi.string(),
  title: joi.string(),
  excerpt: joi.string(),
  content: joi.string(),
  category_id: joi.number(),
}).required().min(1);

module.exports = {
  oblogCreateCategory,
  oblogModifyCategory,
  oblogCreatePost,
  oblogModifyPost,
};
