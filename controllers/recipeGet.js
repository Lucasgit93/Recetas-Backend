const { request } = require("express");
const { Bakery, Chocolatier, Pastry } = require("../models");

const recipesGet = async (req = request, res) => {
  const { menu } = req.params;
  const { q } = req.body;

  switch (menu) {
    case "bakery":
      const bakery = await Bakery.find({ q })

      return res.status(200).json({
        bakery,
      });

    case "pastry":
      const pastry = await Pastry.find({ q })

      return res.status(200).json({
        pastry,
      });

    case "chocolatier":
      const chocolatier = await Chocolatier.find({ q })

      return res.status(200).json({
        chocolatier,
      });

    default:
      return res.status(400).json({ msg: "URL invalido" });
  }
};

const recipeGet = async(req, res) => {
  const { id } = req.params;

  let recipe;

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
