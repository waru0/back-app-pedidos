const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombres: { type: String, required: " EL nombre es obligatorio", trim: true },
  precio: {
    type: Number,
    required: " El Precio es obligatorio",
    trim: true,
  },
  stock: { type: Number, required: false, trim: true, default: 0 },
  imagen: { type: String, required: false, trim: true },
  descripcion: { type: String, required: false, trim: true },
});

module.exports = mongoose.model("Producto", ProductoSchema, "producto");
