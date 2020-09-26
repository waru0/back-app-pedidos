const Pedidos = require("../models/Pedidos");
const Producto = require("../models/Producto");

const listar = async (req, res) => {
  const pedidos = await Pedidos.find()
    .populate("cliente")
    .populate({ path: "productos.producto", model: "Producto" });
  res.json(pedidos);
  res.json({ mensaje: "Lista de Pedido" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar de Pedido" });
};
const agregar = async (req, res, next) => {
  try {
    const prod = new Pedidos(req.body);
    await prod.save();
    res.json({ mensaje: " Producto Registrado", prod });
  } catch {
    res.json({ mensaje: "no se pudo registrar el pedido" });
  }
};
const modificar = function (req, res) {
  res.json({ mensaje: "Modificar de Pedido" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar de Pedido" });
};

module.exports = {
  listar,
  mostrar,
  agregar,
  modificar,
  eliminar,
};
