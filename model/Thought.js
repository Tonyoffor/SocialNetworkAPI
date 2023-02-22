const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
// const { init } = require('./User');
const { ObjectId } = require('mongodb');

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
    type: Schema.Types.ObjectId,
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



//I am meant to do something here, not sure what

thoughtSchema.virtual('createdAtFormatted').get(function() {
    return this.createdAt.toLocaleString();
  });
  
  const thought = mongoose.model('thought', thoughtSchema);
  
  // Query for thought and include the formatted timestamp
  thought.find({})
    .select('body createdAt createdAtFormatted')
    .exec(function(err, thought) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(thought);
    });


    // Define a virtual property for the reaction count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  
  // Query for thoughts and include the reaction count
  thought.find({})
    .select('thoughtText username reactions reactionCount')
    .exec(function(err, thoughts) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(thoughts);
    });
  

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
