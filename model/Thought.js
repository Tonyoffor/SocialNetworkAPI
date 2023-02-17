const { Schema, model } = require('mongoose');
const { init } = require('./User');

const thoughtSchema = new Schema({
toughtText: { 
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
},
createdAt:{
    type: Date,
    default: Date.now(),
},
username:{
    type: String,
    required: true,
},
reactions: {
    type: Schema.Types.ObjectId,
    ref: 'reactionSchema'
    //find object notes 
// Array of nested documents created with the reactionSchema
}
})

const reactionSchema = new Schema({
reactionId:{
    default: new ObjectId,
    // Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
},
reactionBody:{
    type: String,
    required: true,
    maxlength: 280,
},
username:{
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now,
  },
})






const Thought = model('thought', thoughtSchema);

module.exports = Thought;




// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// username (The user that created this thought)
// String
// Required
// reactions (These are like replies)
// Array of nested documents created with the reactionSchema
