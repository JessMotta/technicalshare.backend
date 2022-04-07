/**
 * Uma high order function que a função de requisição do Express, processa a Promise e captura possíveis erros
 * @param {Function} fn - função do express
 * @returns {Promise<any>} promise resolvida ou com erro capturado
 */
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;
