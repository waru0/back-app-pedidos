//IMPORTS
import express from "express";
import morgan from "morgan";
import port from "./config/config";
//importando el modulo de rutas
import { rutas } from "./routes/index.js";
import { port as _port } from "./config/config";

//CONFIGS
const app = express();
app.use(morgan("dev"));

app.set("port", process.env.PORT || _port);

//HABILITAR RUTAS
rutas(app);
//LEVANTAR SERVICIO
app.listen(app.get("port"), () => {
  console.log("Servidor levantado en: 127.0.0.1: " + app.get("port"));
});
