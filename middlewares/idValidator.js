const { Bakery, Pastry, Chocolatier } = require("../models");

const idValidation = async(req, res , next) => {

    const { id } = req.params;


    const bakery = await Bakery.findOne( {id} );
    const pastry = await Pastry.findOne( {id} );
    const chocolatier = await Chocolatier.findOne( {id} );


    if(!bakery){
        res.status(400).json({
            msg: 'No existe esa receta'
        })
    } else if(!pastry){
        res.status(400).json({
            msg: 'No existe esa receta'
        })
    } else if(!chocolatier){
        res.status(400).json({
            msg: 'No existe esa receta'
        })
    } else{

        next();
    }

};





module.exports = {
    idValidation
}