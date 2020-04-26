//
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: [128, 'Invalid length! Maximum characters is 128 '],
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
  },
  street: {
    type: String,
    required: true,
    minlength: [4, 'Invalid length! Minimum characters is 4 '],
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
  },
  image: { type: String, required: true },
  numOfRooms: { type: Number, required: true },
  description: { type: String, required: true },
  dailyPrice: { type: Number, required: true },
  shared: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rental', rentalSchema);
