const { Bakery, Pastry, Chocolatier } = require("../models");


const recipeDelete = async (req, res) => {
  const id = req.params.id;


  const bakery = await Bakery.findOneAndDelete( {_id: id} );
  const pastry = await Pastry.findOneAndDelete( {_id: id} );
  const chocolatier = await Chocolatier.findOneAndDelete( {_id: id} );



  res.status(200).json({
    bakery,
    pastry,
    chocolatier,
  });
};

module.exports = {
  recipeDelete,
};
