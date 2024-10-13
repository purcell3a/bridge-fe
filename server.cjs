// server.js or index.js (Node.js + Express server)

const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// The catch-all handler: for any request that doesn't match a route, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
