"use strict";

const clienteController = require("./../controllers/clienteController");

const productoController = require("./../controllers/productoController");
/**
 * Necesita enviar app de express
 * @param {module} app:express
 */


module.exports.rutas = app => {
  //rutas de login
  //rutas de usuario
  //rutas de Cliente
  app.get("/cliente", clienteController.listar);
  app.get("/cliente/:id", clienteController.mostrar);
  app.post("/cliente", clienteController.agregar);
  app.put("/cliente/:id", clienteController.modificar);
  app.delete("/cliente/:id", clienteController.eliminar); //rutas de Producto

  app.get("/producto", productoController.listar);
  app.get("/producto/:id", productoController.mostrar);
  app.post("/producto", productoController.agregar);
  app.put("/producto/:id", productoController.modificar);
  app.delete("/producto/:id", productoController.eliminar); //rutas de Pedidos
};