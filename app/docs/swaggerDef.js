const { version } = require('../../package.json');
const config = require('../config/config.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Technical Share API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/luanaggoncalves/technicalshare.backend/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config?.port ?? 8080}/v1`,
    },
  ],
};

module.exports = swaggerDef;
