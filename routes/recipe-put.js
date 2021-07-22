const { Router } = require('express');
const { check } = require('express-validator');

const { bakeryPut, pastryPut, chocolatierPut} = require('../controllers');
const { fieldValidation } = require('../middlewares/fieldValidation');
const { jwtValidation } = require('../middlewares/jwtValidation');





const router = Router();



router.put('/pastry/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], pastryPut);

router.put('/bakery/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], bakeryPut);

router.put('/chocolatier/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], chocolatierPut);



module.exports = router;
