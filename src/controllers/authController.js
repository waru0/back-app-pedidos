const usuario = require("./../models/Usuario");
const Usuario = require("./../models/Usuario");
const login = async (req, res) => {
  //1. Verificar si el email esta registrado

  const user = await Usuario.findOne({ email: req.body.email });
  if (!user) {
    res.json({ mensaje: "Email inexistente" });
  } else {
    res.json({ mensaje: "Bienvenido" + req.body.email });
  }
  //2.
};

module.exports = {
  login,
};
