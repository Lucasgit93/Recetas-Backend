const { Router } = require('express');
const { check } = require('express-validator');

const { pastryDelete, bakeryDelete, chocolatierDelete } = require('../controllers');
const { fieldValidation } = require('../middlewares/fieldValidation');
const { jwtValidation } = require('../middlewares/jwtValidation');



const router = Router();


router.delete('/pastry/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], pastryDelete);

router.delete('/bakery/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], bakeryDelete);

router.delete('/chocolatier/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], chocolatierDelete);



module.exports = router;