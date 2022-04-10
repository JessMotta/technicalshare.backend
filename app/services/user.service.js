const httpStatus = require('http-status');
const db = require('../models');
const ApiError = require('../utils/ApiError');

const User = db.User;

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
  });
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findByPk(id);
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

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
