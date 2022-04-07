const express = require('express');
const userRoute = require('./user.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  // TODO: Criar rota do swagger
  // {
  //   path: '/docs',
  //   route: docsRoute,
  // },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
