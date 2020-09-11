const listar = function (req, res) {
  res.json({ mensaje: "Lista de Usuarios" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar de Usuarios" });
};
const agregar = function (req, res) {
  res.json({ mensaje: "Guardar de Usuarios" });
};
const modificar = function (req, res) {
  res.json({ mensaje: "Modificar de Usuarios" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar de Usuarios" });
};

module.exports = {
  listar,
  mostrar,
  agregar,
  modificar,
  eliminar,
};
