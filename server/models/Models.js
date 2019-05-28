const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  age: { type: Number, required: [true, "Age is required"] }
});

mongoose.model('Author', AuthorSchema);