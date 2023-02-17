const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
   // Must match a valid email address (look into Mongoose's matching validation)
  },
  thoughts:{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
// Array of _id values referencing the Thought model
  },
  friends:{
    type: Schema.Types.ObjectId,
    ref: 'User'
// Array of _id values referencing the User model (self-reference)
  }
});

const User = model('user', userSchema);


module.exports = User;


