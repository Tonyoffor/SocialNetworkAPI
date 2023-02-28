//First you bring in the model 
const {Thought} = require('../model');

//Then you export the information 
module.exports = {
    //this is a get command for thoughts 
    //tested
  getThought(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },  
  //tested
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }) //here ou use the id of the thought to find the information and retrieve it
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  //tested
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  //this deletes the thought by using the find one and delete then pointing at the thoughtId as what needs to be deleted
  //tested
  deleteThought(req, res) {
    Thought.findOneAndDelete({_id:req.params.thoughtId})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  //same concept as the delete but with update but with 
  updateThought(req, res){
    Thought.findOneAndUpdate({_id:req.params.reactionId},{$set:req.body},{runValidators:true,new:true})
    .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
},
//same concept as the find one and update 
addReaction(req, res){
    Thought.findOneAndUpdate({_id:req.params.reactionId},{$addToSet:{reaction:req.params.reactionId}},{runValidators:true,new:true})
    .then((dbReactionData) => res.json(dbReactionData))
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res){
    Thought.findOneAndUpdate({_id:req.params.reactionId},{$pull:{reaction:req.params.reactionId}},{new:true})
    .then((dbReactionData) => res.json(dbReactionData))
      .catch((err) => res.status(500).json(err));
  }
}

  
  