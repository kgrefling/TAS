var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    isbn: {type: Number, required: true},
    title: {type: String, required: true},
    authors: {type: [Number], required: false},
    cover: {type: String, required: false},
    price: {type: Number, required: true},
    description: {type: String, required: false},
    genre: {type: String,  enum: ["fantasy","mystery","romance","thriller","drama","adventure"],  required: false},
    year: {type: Number, required: false},
    amount: {type: Number, required: true}
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
