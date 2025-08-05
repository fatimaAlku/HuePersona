const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  hexValue:     { type: String, required: true },
  description:  { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // ✅ THIS IS IMPORTANT
});

module.exports = mongoose.model('Color', colorSchema);
