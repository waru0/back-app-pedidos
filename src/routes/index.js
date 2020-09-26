const clienteController = require("./../controllers/clienteController");
const productoController = require("./../controllers/productoController");
const pedidoController = require("./../controllers/pedidoController");
const usuarioController = require("./../controllers/usuarioController");
const authController = require("../controllers/authController");

/**
 * Necesita enviar app de express
 * @param {module} app:express
 */

//Middlewares

const authMiddleware = require("../middlewares/authMiddlewares");

module.exports.rutas = (app) => {
  //rutas de login
  app.post("/login", authController.login);
  //rutas de usuario
  //rutas de Cliente
  app.get("/cliente", authMiddleware.verificarAuth, clienteController.listar);
  app.get(
    "/cliente/:id",
    authMiddleware.verificarAuth,
    clienteController.mostrar
  );
  app.post("/cliente", authMiddleware.verificarAuth, clienteController.agregar);
  app.put(
    "/cliente/:id",
    authMiddleware.verificarAuth,
    clienteController.modificar
  );
  app.delete(
    "/cliente/:id",
    authMiddleware.verificarAuth,
    clienteController.eliminar
  );

  //rutas de Producto
  app.get(
    "/producto",
    authMiddleware.verificarAuth,
    productoController.listarprod
  );
  app.get(
    "/producto/:id",
    authMiddleware.verificarAuth,
    productoController.mostrar
  );
  app.post(
    "/producto",
    authMiddleware.verificarAuth,
    productoController.agregar
  );
  app.put(
    "/producto/:id",
    authMiddleware.verificarAuth,
    productoController.modificar
  );
  app.delete(
    "/producto/:id",
    authMiddleware.verificarAuth,
    productoController.eliminar
  );
  //rutas de Pedidos
  app.get("/pedido", authMiddleware.verificarAuth, pedidoController.listar);
  app.get(
    "/pedido/:id",
    authMiddleware.verificarAuth,
    pedidoController.mostrar
  );
  app.post("/pedido", authMiddleware.verificarAuth, pedidoController.agregar);
  app.put(
    "/pedido/:id",
    authMiddleware.verificarAuth,
    pedidoController.modificar
  );
  app.delete(
    "/pedido/:id",
    authMiddleware.verificarAuth,
    pedidoController.eliminar
  );

  //rutas Usuario
  app.get("/usuario", authMiddleware.verificarAuth, usuarioController.listar);
  //app.get("/usuario/:id", usuarioController.mostrar);
  app.post("/usuario", authMiddleware.verificarAuth, usuarioController.agregar);
  //app.put("/usuario/:id", usuarioController.modificar);
  //app.delete("/usuario/:id", usuarioController.eliminar);
};
