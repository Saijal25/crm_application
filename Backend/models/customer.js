const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  totalSpends: { type: Number, default: 0 },
  numberOfVisits: { type: Number, default: 0 },
  lastVisit: { type: Date }
});

module.exports = mongoose.model('customers', customerSchema);
