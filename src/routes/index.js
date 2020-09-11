const clienteController = require("./../controllers/clienteController");
const productoController = require("./../controllers/productoController");
const pedidoController = require("./../controllers/pedidoController");
const usuarioController = require("./../controllers/usuarioController");

/**
 * Necesita enviar app de express
 * @param {module} app:express
 */

module.exports.rutas = (app) => {
  //rutas de login

  //rutas de usuario

  //rutas de Cliente
  app.get("/cliente", clienteController.listar);
  app.get("/cliente/:id", clienteController.mostrar);
  app.post("/cliente", clienteController.agregar);
  app.put("/cliente/:id", clienteController.modificar);
  app.delete("/cliente/:id", clienteController.eliminar);

  //rutas de Producto
  app.get("/producto", productoController.listar);
  app.get("/producto/:id", productoController.mostrar);
  app.post("/producto", productoController.agregar);
  app.put("/producto/:id", productoController.modificar);
  app.delete("/producto/:id", productoController.eliminar);

  //rutas de Pedidos
  app.get("/pedido", pedidoController.listar);
  app.get("/pedido/:id", pedidoController.mostrar);
  app.post("/pedido", pedidoController.agregar);
  app.put("/pedido/:id", pedidoController.modificar);
  app.delete("/pedido/:id", pedidoController.eliminar);

  //rutas Usuario
  //rutas de Pedidos
  app.get("/usuario", usuarioController.listar);
  app.get("/usuario/:id", usuarioController.mostrar);
  app.post("/usuario", usuarioController.agregar);
  app.put("/usuario/:id", usuarioController.modificar);
  app.delete("/usuario/:id", usuarioController.eliminar);
};
