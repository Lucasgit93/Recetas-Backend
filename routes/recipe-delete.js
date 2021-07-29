const { Router } = require("express");
const { check } = require("express-validator");

const { recipeDelete } = require("../controllers");
const { fieldValidation } = require("../middlewares/fieldValidation");
const { jwtValidation } = require("../middlewares/jwtValidation");

const router = Router();

router.delete(
  "/:id",
  [
    jwtValidation,
    check("id", "La receta no existe").isMongoId(),
    fieldValidation,
  ],
  recipeDelete
);



module.exports = router;
