const expressInit = require("./init/express");
const mongoInit = require("./init/mongo");
const { port } = require("./config");
const express = require("express");
const app = express();

expressInit(app);
mongoInit().then(() =>
  app.listen(port, () => console.log("Listening in", port))
);
