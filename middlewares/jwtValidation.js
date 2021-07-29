const jwt = require("jsonwebtoken");

const { User } = require("../models");

const jwtValidation = async (req , res , next) => {
  const token = req.header("token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la peticion",
    });
  };

  const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

  const user = await User.findById(uid);

  if (!user) {
    return res.status(401).json({
      msg: "Token no valido",
    });
  }

  req.user = user;

  next();
};

module.exports = {
  jwtValidation,
};
