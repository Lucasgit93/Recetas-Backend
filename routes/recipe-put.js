const { Router } = require('express');
const { check } = require('express-validator');

const { recipePut } = require('../controllers');
const { fieldValidation } = require('../middlewares/fieldValidation');
const { jwtValidation } = require('../middlewares/jwtValidation');





const router = Router();



router.put('/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    fieldValidation
], recipePut);





module.exports = router;
