const { Router } = require('express');
const { recipeSearch } = require('../controllers');







const router = Router();





router.get('/', recipeSearch);




module.exports = router;