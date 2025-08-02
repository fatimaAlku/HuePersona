const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  selectedColors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }],
  generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', resultSchema);
