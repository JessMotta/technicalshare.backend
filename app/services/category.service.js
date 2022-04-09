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

/**
 * Gets a category by id
 * @param {string} categoryId
 * @returns {Promise<Category>}
 */
const getCategoryById = async (id) => {
  return Category.findByPk(id);
};

/**
 * Updates a category by id
 * @param {string} categoryId
 * @param {Object} updateBody
 * @returns {Promise<Category>}
 */
const updateCategoryById = async (categoryId, updateBody) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  if (updateBody.name && (await Category.findOne({ where: { name: updateBody.name } }))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category already exists');
  }

  Object.assign(category, updateBody);
  await category.save();
  return category;
};

/**
 * Deletes a category by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.destroy();
  return category;
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
