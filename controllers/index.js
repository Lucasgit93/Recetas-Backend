const recipeGet = require("./recipeGet");
const recipePost = require("./recipePost");
const recipePut = require("./recipePut");
const recipeDelete = require("./recipeDelete");
const userLogin = require("./userLogin");

module.exports = {
  ...recipeGet,
  ...recipePost,
  ...recipePut,
  ...recipeDelete,
  ...userLogin
};
