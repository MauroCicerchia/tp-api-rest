const bodyParser = require("body-parser");
const morgan = require("morgan");

module.exports = app => {
  app.use(morgan("dev"));
  app.use(bodyParser.json());

  app.use("/api", require("../api/routes"));

  app.use("*", (req, res) =>
    res
      .status(404)
      .send("Como te va a tirar un 404 man, escribí bien el endpoint y listo.")
  );
};
