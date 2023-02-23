const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId(),
        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
})





//I am meant to do something here, not sure what

thoughtSchema.virtual('createdAtFormatted').get(function () {
    return this.createdAt.toLocaleString();
});





// Define a virtual property for the reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
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
