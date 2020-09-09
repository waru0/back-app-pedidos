//IMPORTS
const express = requiere("express");
const morgan = require("morgan");
//importando el modulo de rutas
const routes = require("./routes/index.js)");

//CONFIGS
const app = express();
app.use(morgan("dev"));

//HABILITAR RUTAS
routes.rutas;
//LEVANTAR SERVICIO
app.listen(3000, () => {
  console.log("servidor levantado en: ");
});
