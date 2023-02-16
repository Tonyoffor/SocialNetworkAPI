const mongoose = require('mongoose');
const thoughtsSchema = new mongoose.Schema({
toughtText: { 
    type: String,
required: true,
// Must be between 1 and 280 characters
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
// Array of nested documents created with the reactionSchema
}
})

module.exports = Thoughts;




// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// username (The user that created this thought)
// String
// Required
// reactions (These are like replies)
// Array of nested documents created with the reactionSchema
