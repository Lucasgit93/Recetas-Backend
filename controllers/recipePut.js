const { Bakery, Chocolatier, Pastry } = require("../models");

const recipePut = async (req, res) => {
  const id = req.params.id;
  const { _id, title,...rest } = req.body;

 const data = {
   title: title.toLowerCase(),
   rest
 }

  const bakery = await Bakery.findByIdAndUpdate(id, data);
  const pastry = await Pastry.findByIdAndUpdate(id, data);
  const chocolatier = await Chocolatier.findByIdAndUpdate(id, data);

  res.status(201).json({
    bakery,
    pastry,
    chocolatier,
  });
};

module.exports = {
  recipePut,
};
