import Producto from "./../models/Producto";
import { isValidObjectId } from "mongoose";

const listarprod = async function (req, res) {
  /*Producto.find()
    .then((datos) => {
      res.json(datos);
    })
    .catch((error) => {
      console.log(error);
    });*/
  try {
    const datos = await Producto.find();
    res.json(datos);
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "Producto no Encontrado", status: 404 });
  }
};

const mostrar = async function (req, res) {
  try {
    isValidObjectId(req.params.id);
    if (dato) {
      const Producto = await Producto.findById(req.params.id);
      res.json({ mensaje: "producto", datos: Producto });
    } else {
      res.json({ mensaje: "error de producto", status: 404 });
    }
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "Ocurrio un error al buscar producto", status: 404 });
  }
};
const agregar = function (req, res) {
  const Prod = new Producto(req.body);
  Prod.save();
  res.json({ mensaje: " Cliente Registrado", Prod });
};
const modificar = function (req, res) {
  res.json({ mensaje: "Modificar de Producto" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar de Producto" });
};

module.exports = {
  listarprod,
  mostrar,
  agregar,
  modificar,
  eliminar,
};
