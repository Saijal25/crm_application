const express = require('express');
const router = express.Router();
const CommunicationLog = require('../models/CommunicationLog');

// Create a communication log
router.post('/', async (req, res) => {
  const { audience, message } = req.body;
  try {
    const newLog = new CommunicationLog({ audience, message });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update communication log status
router.put('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const log = await CommunicationLog.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!log) {
      return res.status(404).json({ message: 'Log not found' });
    }
    res.status(200).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

