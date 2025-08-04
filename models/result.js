const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [String], // Or a more structured object
  personalityType: String,
  suggestedColors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }],
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
