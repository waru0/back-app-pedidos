"use strict";

const listar = function (req, res) {
  res.json({
    mensaje: "Lista de Clientes"
  });
};

const mostrar = function (req, res) {
  res.json({
    mensaje: "Mostrar de Clientes"
  });
};

const agregar = function (req, res) {
  res.json({
    mensaje: "Guardar de Clientes"
  });
};

const modificar = function (req, res) {
  res.json({
    mensaje: "Modificar de Clientes"
  });
};

const eliminar = function (req, res) {
  res.json({
    mensaje: "Eliminar de Clientes"
  });
};

module.exports = {
  listar,
  mostrar,
  agregar,
  modificar,
  eliminar
};