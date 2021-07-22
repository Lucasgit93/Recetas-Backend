const { Bakery, Chocolatier, Pastry } = require("../models");

const bakeryPut = async (req, res) => {
  const { id } = req.params;
  const { _id, ...rest } = req.body;
try {
    const bakeryPut = await Bakery.findByIdAndUpdate(id, rest);
    res.status(201).json({
      bakeryPut,
    });
    
} catch (error) {
    console.log(error)
    throw new Error('No existe esa receta')   
}

};

const pastryPut = async (req, res) => {
  const { id } = req.params;
  const { _id, ...rest } = req.body;

  const pastryPut = await Pastry.findByIdAndUpdate(id, rest);
  res.status(201).json({
    pastryPut,
  });
};

const chocolatierPut = async (req, res) => {
  const { id } = req.params;
  const { _id, ...rest } = req.body;

  const chocolatierPut = await Chocolatier.findByIdAndUpdate(id, rest);
  res.status(201).json({
    chocolatierPut,
  });
};

module.exports = {
  bakeryPut,
  pastryPut,
  chocolatierPut,
};
