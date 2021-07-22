const { Router } = require("express");
const {
  recipesGet,
  bakeryGet,
  pastryGet,
  chocolatierGet,
} = require("../controllers");

const router = Router();

router.get("/:menu", recipesGet);

router.get("/bakery/:id", bakeryGet);

router.get("/pastry/:id", pastryGet);

router.get("/chocolatier/:id", chocolatierGet);

module.exports = router;
