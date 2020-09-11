const listar = function (req, res) {
  res.json({ mensaje: "Lista de Pedido" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar de Pedido" });
};
const agregar = function (req, res) {
  res.json({ mensaje: "Guardar de Pedido" });
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
