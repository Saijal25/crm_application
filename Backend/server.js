const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');
const communicationRoutes = require('./routes/communicationLog');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send()
})

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes will be added here
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/communications', communicationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
