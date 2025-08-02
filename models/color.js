const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name:         { type: String, required: true, unique: true },
  hexValue:     { type: String, required: true },
  description:  { type: String },
});

module.exports = mongoose.model('Color', colorSchema);
