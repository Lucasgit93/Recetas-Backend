const { Router } = require('express');
const { check } = require('express-validator');

const { pastryDelete, bakeryDelete, chocolatierDelete } = require('../controllers');
const { fieldValidation } = require('../middlewares/fieldValidation');
const { idValidation } = require('../middlewares/idValidator');
const { jwtValidation } = require('../middlewares/jwtValidation');



const router = Router();


router.delete('/:menu/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    // idValidation,
    fieldValidation
], pastryDelete);

router.delete('/:menu/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    // idValidation,
    fieldValidation
], bakeryDelete);

router.delete('/:menu/:id',[
    jwtValidation,
    check('id', 'La receta no existe').isMongoId(),
    // idValidation,
    fieldValidation
], chocolatierDelete);

// router.delete('/pastry/:id',[
//     jwtValidation,
//     check('id', 'La receta no existe').isMongoId(),
//     // idValidation,
//     fieldValidation
// ], pastryDelete);

// router.delete('/bakery/:id',[
//     jwtValidation,
//     check('id', 'La receta no existe').isMongoId(),
//     // idValidation,
//     fieldValidation
// ], bakeryDelete);

// router.delete('/chocolatier/:id',[
//     jwtValidation,
//     check('id', 'La receta no existe').isMongoId(),
//     // idValidation,
//     fieldValidation
// ], chocolatierDelete);



module.exports = router;