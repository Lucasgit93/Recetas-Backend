const { Schema, model } = require("mongoose");


const PastrySchema = Schema({
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


PastrySchema.methods.toJSON = function() {
  const { __v, ...data } = this.toObject();
  return data;
}

module.exports = model("Pastry", PastrySchema);
