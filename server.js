const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "http://localhost:8081"
};
const db = require("./app/models");

// Para atualizar o banco de dados quando em desenvolvimento
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db');
// });

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Application is running healthy." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});