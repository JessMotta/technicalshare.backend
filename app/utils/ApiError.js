/**
 * Classe que serve para tratamento de erros da Api
 * @param {string} statusCode
 * @param {string} message
 * @param {boolean} isOperational
 * @param {string} errorStack
 */
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
