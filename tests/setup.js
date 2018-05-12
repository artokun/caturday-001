const mongoose = require('mongoose');
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/caturday-test';

mongoose.connect(MONGO_URI);
