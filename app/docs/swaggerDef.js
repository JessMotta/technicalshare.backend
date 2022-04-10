const { version } = require('../../package.json');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Technical Share API documentation',
    description: 'This API has been developed under FCamara"s "Programa de Formação [SQUAD 20]" to provide a technical share platform for FCamara"s employees.',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/luanaggoncalves/technicalshare.backend/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `${config?.server_url ?? 'http://localhost:8080/v1'}`,
    },
  ],
};

module.exports = swaggerDef;
