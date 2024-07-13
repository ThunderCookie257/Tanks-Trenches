// Import required modules
const express = require('express');
const path = require("path");
const {Game} = require('./server/game.js');

// global variables
var g;

// Create an Express application
const app = express();

// Define the directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// new game
app.get('/newGame', (req, res) => {
  g = new Game();
  g.setUpSamplePosition();
  res.send(g.printState());
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});