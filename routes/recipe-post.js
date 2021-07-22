const { Router } = require('express');

const { check } = require('express-validator');
const { recipePost } = require('../controllers/recipePost');

const { fieldValidation } = require('../middlewares/fieldValidation');
const { jwtValidation } = require('../middlewares/jwtValidation');




const router = Router();



router.post('/', [
    jwtValidation,
    check('title', 'Campo obligatorio').not().isEmpty(),
    fieldValidation
], recipePost);



module.exports = router;
