const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create an order
router.post('/', async (req, res) => {
  const { customerId, amount, date } = req.body;
  try {
    const newOrder = new Order({ customerId, amount, date });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('customerId');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get orders by customer ID
router.get('/customer/:customerId', async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.params.customerId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
