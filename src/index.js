//IMPORTS
const express = require("express");
const morgan = require("morgan");
//importando el modulo de rutas
const routes = require("./routes/index.js");

//CONFIGS
const app = express();
app.use(morgan("dev"));

//HABILITAR RUTAS
routes.rutas(app);
//LEVANTAR SERVICIO
app.listen(3000, () => {
  console.log("Servidor levantado en: ");
});
