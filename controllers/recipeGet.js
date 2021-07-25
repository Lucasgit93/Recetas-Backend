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

const recipeGet = async(req, res) => {
  const { id } = req.params;

  const bakery = await Bakery.findById(id);

  const pastry = await Pastry.findById(id);

  const chocolatier = await Chocolatier.findById(id);


  res.status(200).json({
    bakery,
    pastry,
    chocolatier
  })


};

module.exports = {
  recipesGet,
  recipeGet,
};
