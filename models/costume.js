const mongoose = require('mongoose');

const costumeSchema = new mongoose.Schema({
  costume_type: {
    type: String,
    required: true,
    minlength: 2
  },
  size: {
    type: String,
    required: true,
    enum: ['small', 'medium', 'large']
  },
  cost: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  }
});

module.exports = mongoose.model('Costume', costumeSchema);