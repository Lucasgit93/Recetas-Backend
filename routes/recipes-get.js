const { Router } = require("express");
const {
  recipesGet
} = require("../controllers");

const router = Router();

router.get("/:menu", recipesGet);


module.exports = router;
