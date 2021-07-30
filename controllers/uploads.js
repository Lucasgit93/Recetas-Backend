const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dw33r7aul",
  api_key: 876369659935679,
  api_secret: "KCXorUz4MVt0Ewf8luc6cKJCpaA",
});

const { response } = require("express");
const { fileUpload } = require("../helpers/file-upload");
const { Chocolatier, Pastry, Bakery } = require("../models");

const fileLoad = async (req, res = response) => {
  try {
    const fullPath = await fileUpload(req.files, undefined, "imgs");

    res.json({
      name: fullPath,
    });
  } catch (msg) {
    res.status(400).json({ msg });
  }
};

const cloudinaryImgUpdate = async (req, res = response) => {
  const { id } = req.params;

  let model;

  switch (especialidad) {
    case "bakery":
      model = await Bakery.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe el usuario con el id - ${id}`,
        });
      }

      break;
    case "pastry":
      model = await Pastry.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id - ${id}`,
        });
      }

      break;

    case "chocolatier":
      model = await Chocolatier.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id - ${id}`,
        });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvido validar esto" });
      break;
  }

  if (model.img) {
    const nameArr = model.img.split("/");
    const name = nameArr[nameArr.length - 1];
    const [public_id] = name.split(".");

    cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.archivo;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

  model.img = secure_url;

  await model.save();

  res.json(model);
};

const showImg = async (req, res = response) => {
  const { id, especialidad } = req.params;

  let model;

  switch (especialidad) {
    case "bakery":
      model = await Bakery.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe el usuario con el id - ${id}`,
        });
      }

      break;
    case "pastry":
      model = await Pastry.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id - ${id}`,
        });
      }

      break;

    case "chocolatier":
      model = await Chocolatier.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id - ${id}`,
        });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvido validar esto" });
      break;
  }

  if (model.img) {
    const pathImagen = path.join(__dirname, "../uploads", especialidad, model.img);
    if (fs.existsSync(pathImagen)) {
      return res.sendFile(pathImagen);
    }
  }

  //TODO: Path para poner una imagen por defecto

  const noImg = path.join(__dirname, "../assets/no-image.jpg");

  res.sendFile(noImg);
};

module.exports = {
  fileLoad,
  showImg,
  cloudinaryImgUpdate,
};
