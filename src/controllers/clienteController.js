const cliente = require("./../models/Cliente");
const { findById } = require("./../models/Cliente");
const listar = async function (req, res) {
  cliente.find().then((datos) => {
    res.json(datos);
  });
  /*.catch((err) => {
      console.log("ERROR:", err);
    });*/
  var datos = await cliente.find();
  res.json(datos);
  //res.json({ mensaje: "Lista de Clientes" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar de Clientes" });
};
const agregar = function (req, res) {
  const clie = new cliente({
    nombres: "Juan Perez",
    apellidos: "Quisbert",
  });
  clie.save();
  res.json({ mensaje: "Guardar Cliente" });
};
const modificar = function (req, res) {
  res.json({ mensaje: "Modificar de Clientes" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar de Clientes" });
};

module.exports = {
  listar,
  mostrar,
  agregar,
  modificar,
  eliminar,
};
