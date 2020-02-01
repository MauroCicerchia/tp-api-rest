import config from "../config";
import mongoose from "mongoose";
import Promise from "bluebird";
const { mongo } = config;
mongoose.Promise = Promise;

export default () =>
  mongoose
    .connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Conexión exitosa");
    })
    .catch(() => {
      console.log("Falló la conexion a la DB");
      process.exit(1);
    });
