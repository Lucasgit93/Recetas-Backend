const Bakery = require("../models/bakery");
const Chocolatier = require("../models/chocolatier");
const Pastry = require("../models/pastry");

const recipePost = async (req, res) => {
  const { title, menu,...body } = req.body;

  const data = {
    title: title.toLowerCase(),
    ...body,
    menu,
  }

  switch (menu) {
    case "Panaderia":
      const titulo = await Bakery.findOne({ title });

      if (titulo) {
        return res.status(400).json({
          msg: `Ya existe la receta ${title}`,
        });
      }

      const newBakery = new Bakery(data);

      await newBakery.save();

      return res.status(200).json({
        msg: "ok",
        newBakery
      });

    case "Pasteleria":

      const titulo2 = await Pastry.findOne({ title });

      if (titulo2) {
        return res.status(400).json({ msg: `Ya existe la receta ${title}` });
      }

      const newPastry = new Pastry(data);

      await newPastry.save();

      return res.status(200).json({
        msg: "ok",
        newPastry
      });

    case "Chocolateria":
      const titulo3 = await Chocolatier.findOne({ title });

      if (titulo3) {
        return res.status(400).json({ msg: `Ya existe la receta ${title}` });
      }

      const newChocolatier = new Chocolatier(data);

      await newChocolatier.save();

      return res.status(200).json({
        msg: "ok",
        newChocolatier
      });

    default:
      return res.status(400).json({
        msg: 'El menu es obligatorio'
      })
  }
};

module.exports = {
  recipePost
};
