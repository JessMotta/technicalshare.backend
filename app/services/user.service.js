const httpStatus = require('http-status');
const db = require('../models');
const ApiError = require('../utils/ApiError');

const User = db.User;
const Category = db.Category;

/**
 * Create a user
 * @param {Object} userBody - { email: string; password: string; name: string }
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  const emailExists = await User.findOne({ where: { email: userBody.email } });

  if (emailExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  return User.create(userBody);
};

/**
 * Query for all users
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
    include: [
      {
        model: Category,
        as: "Categories",
        attributes: ["id", "name"],
      }
    ]
  });
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
    include: [
      {
        model: Category,
        as: "Categories",
        attributes: ["id", "name"],
      }
    ]
  });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (updateBody.email && (await User.findOne({ where: { email: updateBody.email } }))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.destroy();
  return user;
};

/**
 * Associates a category to an user by id
 * @param {number} userId
 * @param {number} categoryId
 * @returns {Promise<User>}
 */
const associateCategoryToUser = async (userId, categoryId) => {
  const user = await getUserById(userId);
  const category = await Category.findByPk(categoryId);

  if (!user || !category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User or Category not found');
  }

  const rating = Math.floor(Math.random() * 5) + 1;
  user.addCategories(category, { through: { rating: rating < 3 ? 3 : rating } });

  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  associateCategoryToUser
};
