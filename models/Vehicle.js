const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  companyName: String,
  modelName: String,
  year: Number,
  condition: String, // 'new', 'used'
  price: Number,
  status: String // 'available', 'sold'
});

module.exports = mongoose.model('Vehicle', vehicleSchema);