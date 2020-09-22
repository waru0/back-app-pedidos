import Producto from "./../models/Producto";
import { isValidObjectId } from "mongoose";
const listar = async function (req, res) {
  try {
    const datos = await Producto.find();
    res.json(datos);
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "Producto no Encontrado", status: 404 });
  }
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
