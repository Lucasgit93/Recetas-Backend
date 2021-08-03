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
const { Bakery, Pastry, Chocolatier } = require("../models");

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

const cloudinaryUpload = async (req, res) => {
  const { tempFilePath } = req.files.file;

  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

  res.json(secure_url);
};

const cloudinaryImgUpdate = async (req, res = response) => {
  const id  = req.params.id;

  let model;
  const bakery = await Bakery.findById(id);
  const pastry = await Pastry.findById(id);
  const chocolatier = await Chocolatier.findById(id);

  if( bakery !== null ){
    model = bakery
  } else if( pastry !== null ){
    model = pastry;
  } else {
    model = chocolatier
  }


  
  if (model.file) {
    const nameArr = model.file.split("/");
    const name = nameArr[nameArr.length - 1];
    const [public_id] = name.split(".");

    cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.file;

  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

  model.file = secure_url;

  await model.save();

  res.json(model.file);
};


const cloudinaryImgDelete = async (req, res = response) => {
  const id = req.params.id;

  let model;

  const bakery = await Bakery.findById( id );
  const pastry = await Pastry.findById( id );
  const chocolatier = await Chocolatier.findById( id );

  if( bakery !== null ){
    model = bakery
  } else if( pastry !== null ){
    model = pastry;
  } else {
    model = chocolatier
  }
    const nameArr = model.file.split("/");
    const name = nameArr[nameArr.length - 1];
    const [public_id] = name.split(".");

    cloudinary.uploader.destroy(public_id)
   res.status(200).json('Borrado');

}

const showImg = async (req, res = response) => {
  const { id, especialidad } = req.params;

  let model;

  switch (especialidad) {
    case "bakery":
      model = await Bakery.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe una recetacon el id - ${id}`,
        });
      }

      break;
    case "pastry":
      model = await Pastry.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe una receta con el id - ${id}`,
        });
      }

      break;

    case "chocolatier":
      model = await Chocolatier.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: `No existe una receta con el id - ${id}`,
        });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvido validar esto" });
      break;
  }

  if (model.img) {
    const pathImagen = path.join(
      __dirname,
      "../uploads",
      especialidad,
      model.img
    );
    if (fs.existsSync(pathImagen)) {
      return res.sendFile(pathImagen);
    }
  }

  //TODO: Path para poner una imagen por defecto

  const noImg = path.join(__dirname, "../assets/no-image.jpg");

  res.sendFile(noImg);
};

module.exports = {
  cloudinaryUpload,
  cloudinaryImgUpdate,
  cloudinaryImgDelete
};
