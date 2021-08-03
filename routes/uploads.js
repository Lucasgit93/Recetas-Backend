const { Router } = require("express");
const { check } = require("express-validator");
const {
  cloudinaryImgUpdate,
  cloudinaryUpload,
  cloudinaryImgDelete
} = require("../controllers/uploads");

const { fieldValidation } = require("../middlewares/fieldValidation");
const { fileValidation } = require("../middlewares/fileValidation");

const router = Router();

router.post("/", fileValidation, cloudinaryUpload);

router.put(
  "/:id",
  [
    fileValidation,
    check("id", "El id debe ser valido").isMongoId(),
    fieldValidation,
  ],
  cloudinaryImgUpdate
);

router.delete(
  "/:id",
  [
    check("id", "El id debe ser valido").isMongoId(),
    fieldValidation,
  ],
  cloudinaryImgDelete
);

module.exports = router;
