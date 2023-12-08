const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: {type: String, required: true },
  description: {type: String },
  pages: {type: Number }
});
const bookModel = mongoose.model("300364841-ivan", bookSchema);
module.exports = bookModel;