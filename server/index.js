const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => res.send('OK'));

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
