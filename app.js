
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const userRoutes = require('./routes/user');
app.use(userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
