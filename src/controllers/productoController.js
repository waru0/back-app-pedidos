const listar = function (req, res) {
  res.json({ mensaje: "Lista de Producto" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar de Producto" });
};
const agregar = function (req, res) {
  res.json({ mensaje: "Guardar de Producto" });
};
const modificar = function (req, res) {
  res.json({ mensaje: "Modificar de Producto" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar de Producto" });
};

module.exports = {
  listar,
  mostrar,
  agregar,
  modificar,
  eliminar,
};
