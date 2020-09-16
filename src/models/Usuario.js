const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
  {
    usuario: { type: String, required: false, trim: true },
    correo: {
      type: String,
      required: " El correo es obligatorio",
      trim: true,
    },
    password: { type: String, required: true },
    estado: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);
