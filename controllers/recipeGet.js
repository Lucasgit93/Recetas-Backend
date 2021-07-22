const { request } = require("express");
const { Bakery, Chocolatier, Pastry } = require("../models");

const recipesGet = async (req = request, res) => {
  const { menu } = req.params;
  const { q } = req.body;
  const { limite = 10 } = req.query;

  switch (menu) {
    case "bakery":
      const bakery = await Bakery.find({ q }).limit(Number(limite));

      return res.status(200).json({
        bakery,
      });

    case "pastry":
      const pastry = await Pastry.find({ q }).limit(Number(limite));

      return res.status(200).json({
        pastry,
      });

    case "chocolatier":
      const chocolatier = await Chocolatier.find({ q }).limit(Number(limite));

      return res.status(200).json({
        chocolatier,
      });

    default:
      return res.status(400).json({ msg: "URL invalido" });
  }
};

const bakeryGet = async (req, res) => {
  const { id } = req.params;

  const recipe = await Bakery.findById(id);

  if (!recipe) {
    res.status(400).json({
      msg: "No existe la receta con ese id",
    });
  }

  res.status(200).json({
    recipe,
  });
};

const pastryGet = async (req, res) => {
  const { id } = req.params;

  const recipe = await Pastry.findById(id);

  if (!recipe) {
    res.status(400).json({
      msg: "No existe la receta con ese id",
    });
  }

  res.status(200).json({
    recipe,
  });
};

const chocolatierGet = async (req, res) => {
  const { id } = req.params;

  const recipe = await Chocolatier.findById(id);

  if (!recipe) {
    res.status(400).json({
      msg: "No existe la receta con ese id",
    });
  }

  res.status(200).json({
    recipe,
  });
};

module.exports = {
  recipesGet,
  bakeryGet,
  pastryGet,
  chocolatierGet,
};
