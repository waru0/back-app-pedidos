const Usuario = require("./../models/Usuario");
const config = require("./../config/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../config/config");
const login = async (req, res) => {
  //1. Verificar si el email esta registrado

  const user = await Usuario.findOne({ correo: req.body.correo });
  if (!user) {
    res.json({ mensaje: "Email inexistente" });
  } else {
    const estado = await bcrypt.compare(req.body.password, user.password);
    if (estado) {
      //generar token(JWT)
      const payload = {
        correo: user.correo,
        id: user._id,
        time: new Date(),
      };
      var token = jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRE,
      });
      res.json({
        access_token: token,
        usuario: {
          _id: user._id,
          usuario: user.usuario,
          correo: user.email,
          fecha: new Date(),
        },
      });
    } else {
      res.json({ mensaje: "contraseña incorrecta" });
    }
    res.json({ mensaje: "Bienvenido" + req.body.email });
  }
  //2.
};

module.exports = {
  login,
};
