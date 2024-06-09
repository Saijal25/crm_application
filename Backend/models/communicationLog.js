const mongoose = require('mongoose');

const CommunicationLogSchema = new mongoose.Schema({
  audience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }],
  message: { type: String, required: true },
  status: { type: String, enum: ['SENT', 'FAILED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CommunicationLog', CommunicationLogSchema);
