const { Router } = require("express");
const { check } = require("express-validator");
const {
  fileLoad,
  showImg,
  cloudinaryImgUpdate,
  cloudinaryUpload
} = require("../controllers/uploads");
const { especialidadPermitida } = require("../helpers/db-validators");

const { fieldValidation } = require("../middlewares/fieldValidation");
const { fileValidation } = require("../middlewares/fileValidation");

const router = Router();

router.post("/", fileValidation, cloudinaryUpload);

// router.put(
//   "/:especialidad/:id",
//   [
//     fileValidation,
//     check("id", "El id debe ser valido").isMongoId(),
//     check("especialidad").custom((c) =>
//       especialidadPermitida(c, ["chocolatier", "bakery", "pastry"])
//     ),
//     fieldValidation,
//   ],
//   cloudinaryImgUpdate
// );

// router.get(
//   "/:especialidad/:id",
//   [
//     check("id", "El id debe ser valido").isMongoId(),
//     check("especialidad").custom((c) =>
//       especialidadPermitida(c, ["chocolatier", "bakery", "pastry"])
//     ),
//     fieldValidation,
//   ],
//   showImg
// );

module.exports = router;
