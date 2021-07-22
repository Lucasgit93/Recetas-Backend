const { Router } = require("express");
const { check } = require("express-validator");

const { userGet } = require("../controllers");

const { fieldValidation } = require("../middlewares/fieldValidation")

const router = Router();





router.post('/', [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    fieldValidation
], userGet);


module.exports = router;