// models/dataModel.js
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  sensorValue: Number
});

module.exports = mongoose.model('Data', DataSchema);
