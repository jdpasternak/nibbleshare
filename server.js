const express = require("express");
const router = express.Router();
const sequelize = require("./config/connection");
const path = require("path");
const PORT = process.env.PORT | 3001;
const routes = require("./controllers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
