const { Schema, model } = require("mongoose");


const ChocolatierSchema = Schema({
  title: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  ingredients: {
      type: String,
      required: [true, "Campo obligatorio"]
    },
  preparation: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  menu:{
    type: String,
    required: [true, "Campo obligatorio"]
  },
  file:{
    type:String
  }
});

ChocolatierSchema.methods.toJSON = function() {
  const { __v, ...data } = this.toObject();
  return data;
}

module.exports = model("Chocolatier", ChocolatierSchema);
