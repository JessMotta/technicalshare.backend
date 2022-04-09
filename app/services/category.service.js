const httpStatus = require('http-status');
const db = require('../models');
const ApiError = require('../utils/ApiError');

const Category = db.Category;

/**
 * Create a category
 * @param {string} name - category name
 * @returns {Promise<Category>}
 */
const createCategory = async (category) => {
  const categoryExists = await Category.findOne({ where: { name: category.name } });

  if (categoryExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category already exists');
  }

  return Category.create(category);
};

/**
 * Query for all categories
 * @returns {Promise<QueryResult>}
 */
const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};


module.exports = {
  createCategory,
  getCategories,
};
