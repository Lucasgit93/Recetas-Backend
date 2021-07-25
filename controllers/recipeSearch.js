

const { request, response } = require("express");
const { Bakery, Chocolatier, Pastry } = require("../models");



const recipeSearch = async(req = request, res = response) => {

  const { title } = req.query;
  const query = { title }

      const bakery  = await Bakery.find( query );

      const pastry = await Pastry.find( query );

      const chocolatier = await Chocolatier.find( query );



      res.status(200).json({
        bakery,
        pastry,
        chocolatier
      })


 
  
}






module.exports = {
    recipeSearch
}