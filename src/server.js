// Import required modules
const express = require('express');
const path = require("path");

// Create an Express application
const app = express();

// Define the directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});