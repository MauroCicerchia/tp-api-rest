import bodyParser from "body-parser";
import morgan from "morgan";
import apiRouter from "../api/routes";

export default app => {
  app.use(morgan("dev"));
  app.use(bodyParser.json());

  app.use("/api", apiRouter);

  app.use("*", (req, res) =>
    res
      .status(404)
      .send("Como te va a tirar un 404 man, escribí bien el endpoint y listo.")
  );
};
