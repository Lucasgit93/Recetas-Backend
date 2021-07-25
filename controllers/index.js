const recipeGet = require("./recipeGet");
const recipePost = require("./recipePost");
const recipePut = require("./recipePut");
const recipeDelete = require("./recipeDelete");
const userLogin = require("./userLogin");
const recipeSearch = require("./recipeSearch");

module.exports = {
  ...recipeGet,
  ...recipePost,
  ...recipePut,
  ...recipeDelete,
  ...userLogin,
  ...recipeSearch
};
