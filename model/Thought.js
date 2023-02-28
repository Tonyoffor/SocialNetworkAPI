//first you need to require the schema information from mongoose
const { Schema, model, Types } = require('mongoose');

//below is the how we want to structure the reqired reaction data for each search.
const reactionSchema = new Schema({
    reactionId: {//the reaction Id and its variables 
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId(),
        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId
    },
    //body of reaction and its required
    reactionBody: { 
        type: String,
        required: true,
        maxlength: 280,
    },
    //the username of the person that made the thought 
    username: {
        type: String,
        required: true,
    },
    //The time when the thought was made
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

//Below is the thought schema and its requirements
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
    //the reactionSchema is in block brackets because we want the reaction information from above to show up here
    reactions: [reactionSchema]
})


//When all the information is added as needed then line 53 carries out the creation/storage of inofrmation into database
thoughtSchema.virtual('createdAtFormatted').get(function () {
    return this.createdAt.toLocaleString();
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
