const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect DB
mongoose.connect(MONGO_URI);

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

// Listen
const server = app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}`)
);

process.on('SIGINT', function onSigint() {
  console.info('Got SIGINT. Graceful shutdown ', new Date().toISOString());
  shutdown();
});

process.on('SIGTERM', function onSigterm() {
  console.info('Got SIGTERM. Graceful shutdown ', new Date().toISOString());
  shutdown();
});

function shutdown() {
  server.close(function onServerClosed(err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  });
}

module.exports = server;
