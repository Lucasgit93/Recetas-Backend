
const path = require('path');
const { v4: uuidv4 } = require('uuid');



const fileUpload = (
  files,
  validExtensions = ["png", "jpg"],
  folder = ''
) => {
  return new Promise((resolve, reject) => {
    const { file } = files;

    const splitName = file.name.split(".");
    const extension = splitName[splitName.length - 1];


    if (!validExtensions.includes(extension)) {
      return reject(
        `La extension ${extension} no esta permitida, debe ser una de las siguientes ${validExtensions}`
      );
    }

    const tempName = `${uuidv4()}.${extension}`;
    const uploadPath = path.join(__dirname, "../uploads/", folder, tempName);

    file.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve(tempName)
    });
  });
};

module.exports = {
  fileUpload,
};
