const cliente = require("./../models/Cliente");
const { findById } = require("./../models/Cliente");
const listar = async function (req, res) {
  /* Cliente.find().then((datos) => {
    res.json(datos);
  });
  /*.catch((err) => {
      console.log("ERROR:", err);
    });*/
  try {
    var datos = await cliente.find();
    res.json(datos);
  } catch (error) {
    console.log("ERROR:", error);
  }

  //res.json({ mensaje: "Lista de Clientes" });
};
const mostrar = async function (req, res) {
  let id = req.params.id;
  //promesa
  /*cliente
    .findById(id)
    .then((clie) => {
      res.json(clie);
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ mensaje: "error de clientes" });
    });*/
  //async await

  try {
    var clie = await cliente.findById(id);
    res.json(clie);
  } catch {
    res.json({ mensaje: "error de clientes" });
  }
};
const agregar = function (req, res) {
  const clie = new cliente(req.body);
  clie.save();
  res.json({ mensaje: " Cliente Registrado", clie });
};
const modificar = async function (req, res) {
  let id = req.params.id;
  //await
  /* var dato = await cliente.findByIdAndUpdate(id, req.body);

  console.log(dato);*/
  const clie = await cliente.findById(id);
  const cliemod = await clie.update(req.body);
  res.json({ mensaje: "cliente Modificado", cliemod });
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
