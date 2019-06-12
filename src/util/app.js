const bodyParser = require("body-parser");
const app = require("express")();

const commonMiddlewares = require("../middlewares");

app.set("trust proxy", 1);
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json());
app.use(...commonMiddlewares);

module.exports = app;
