const { Bakery, Chocolatier, Pastry } = require("../models");

const recipePut = async (req, res) => {
  const id = req.params.id;
  const { _id, title, ingredients, preparation, menu, file } = req.body;

 const data = {
   title: title.toLowerCase(),
   ingredients,
   preparation,
   menu,
   file
 }
let recipe;

const bakery = await Bakery.findById( id );
const pastry = await Pastry.findById( id );
const chocolatier = await Chocolatier.findById( id );


if(bakery !== null){
  recipe = await Bakery.findByIdAndUpdate( id, data);
  res.status(200).json(recipe);
} else if(pastry !== null){
  recipe = await Pastry.findByIdAndUpdate( id, data );
  res.status(200).json( recipe );
} else if(chocolatier !== null) {
  recipe = await Chocolatier.findByIdAndUpdate( id, data );
  res.status(200).json( recipe );
}


};

module.exports = {
  recipePut,
};
