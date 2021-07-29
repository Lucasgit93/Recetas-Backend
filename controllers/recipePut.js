const { Bakery, Chocolatier, Pastry } = require("../models");

const recipePut = async (req, res) => {
  const id = req.params.id;
  const { _id, ...rest } = req.body;

  const bakery = await Bakery.findByIdAndUpdate(id, rest);
  const pastry = await Pastry.findByIdAndUpdate(id, rest);
  const chocolatier = await Chocolatier.findByIdAndUpdate(id, rest);

  res.status(201).json({
    bakery,
    pastry,
    chocolatier,
  });
};

module.exports = {
  recipePut,
};
