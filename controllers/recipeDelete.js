const { Bakery, Pastry, Chocolatier } = require("../models");

const bakeryDelete = async(req, res) => {
  const { id } = req.params;

  const recipe = await Bakery.findOneAndDelete(id);
  if(!recipe){
    res.status(400).json({
      msg: "No existe esa receta"
    })
  }

  res.status(200).json({
    msg: "Receta eliminada",
    recipe,
  });
};

const pastryDelete = async(req, res) => {
  const { id } = req.params;

  const recipe = await Pastry.findOneAndDelete(id);

  if(!recipe){
    res.status(400).json({
      msg: "No existe esa receta"
    })
  }

  res.status(200).json({
    msg: "Receta eliminada",
    recipe,
  });
};

const chocolatierDelete = async(req, res) => {
  const { id } = req.params;

  const recipe = await Chocolatier.findOneAndDelete(id);
  if(!recipe){
    res.status(400).json({
      msg: "No existe esa receta"
    })
  }

  res.status(200).json({
    msg: "Receta eliminada",
    recipe,
  });
};

module.exports = {
  bakeryDelete,
  pastryDelete,
  chocolatierDelete,
};
