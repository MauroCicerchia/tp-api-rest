const { mongo } = require("../config");
const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.Promise = Promise;

module.exports = () =>
  mongoose
    .connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Conexión exitosa");
    })
    .catch(() => {
      console.log("Falló la conexion a la DB");
      process.exit(1);
    });
