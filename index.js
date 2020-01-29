const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const app = express();

const uri = "mongodb://localhost:27017/movies";
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", require("./api"));

app.get("*", (req, res) =>
  res
    .status(404)
    .send("Como te va a tirar un 404 man, escribí bien el endpoint y listo.")
);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");
    app.listen(port, () => console.log("Listening in", port));
  })
  .catch(() => {
    console.log("Falló la conexion a la DB");
    process.exit(1);
  });
