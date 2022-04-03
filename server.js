const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "http://localhost:8081"
};
const db = require("./app/models");
const Category = db.category;

// Para atualizar o banco de dados quando em desenvolvimento
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
  createCategories();
});

function createCategories() {
  Category.create({
    id: 1,
    name: "Front-end"
  });

  Category.create({
    id: 2,
    name: "Back-end"
  });

  Category.create({
    id: 3,
    name: "DevOps"
  });
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json and application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// primeira rota
app.get("/", (req, res) => {
  res.json({ message: "Application is running healthy." });
});
// configura a porta, inicia o servidor.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});