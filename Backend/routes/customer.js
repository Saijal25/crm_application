const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Create a customer
router.post('/', async (req, res) => {
  const { name, email, totalSpends, numberOfVisits, lastVisit } = req.body;
  try {
    const newCustomer = new Customer({ name, email, totalSpends, numberOfVisits, lastVisit });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
