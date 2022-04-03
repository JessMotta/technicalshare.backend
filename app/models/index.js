const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelizeConfig = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelizeConfig;

// Atribui ao objeto db todas as models
db.user = require("./user.model.js")(sequelizeConfig, Sequelize);
db.category = require("./category.model.js")(sequelizeConfig, Sequelize);

// Relacionamento entre as tabelas
db.category.belongsToMany(db.user, {
  through: "user_category",
  foreignKey: "categoryId",
  otherKey: "userId"
});

db.user.belongsToMany(db.category, {
  through: "user_category",
  foreignKey: "userId",
  otherKey: "categoryId"
});

module.exports = db;