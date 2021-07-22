const { response } = require("express");

const bcrypt = require("bcryptjs");

const { jwtGenerator } = require("../helpers/jwt-generator");

const { User } = require("../models");

const userGet = async(req, res = response) => {
  const { username, password } = req.body;

  try {
    const userDB = await User.findOne({ username })
    if (!userDB) {
      return res.status(400).json({
        msg: "Usuario o contraseña invalidos",
      });
    }

    const userPass = bcrypt.compareSync(password, userDB.password);

    if (!userPass) {
      return res.status(400).json({
        msg: "Usuario o contraseña invalidos",
      });
    }

    const token = await jwtGenerator(userDB.id);

    return res.json({
      ok: true,
      token
    });
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  userGet
};
