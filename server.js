const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const httpStatus = require('http-status');
const routes = require('./app/routes/v1');
const ApiError = require('./app/utils/ApiError');
const db = require("./app/models");

// Para atualizar o banco de dados quando em desenvolvimento
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db');
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// v1 API routes
app.use('/v1', routes);

// Handle unkown routes with 404 - NOT_FOUND
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
