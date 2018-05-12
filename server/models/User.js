const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  username: { type: String, required: true },
  firstName: String,
  lastName: String,
  age: Number,
});

mongoose.model('user', userSchema);
