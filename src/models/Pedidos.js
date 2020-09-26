const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PedidoSchema = new mongoose.Schema(
  {
    cliente: { type: Schema.ObjectId, ref: "Cliente" },
    productos: [
      {
        producto: { type: Schema.ObjectId, ref: "Producto" },
        cantidad: { type: Number, min: 1, max: 100 },
      },
    ],
    monto_total: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pedido", PedidoSchema, "pedido");
