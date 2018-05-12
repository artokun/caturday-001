const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

require('../server/models/User');

mongoose.connect(MONGO_URI);
