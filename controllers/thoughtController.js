const {Thought} = require('../model');

module.exports = {
  getThought(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },  
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.userId }) //should I still use the user ID to find the data?
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({_id:req.params.thoughtText})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res){
    Thought.findOneAndUpdate({_id:req.params.userId},{$set:req.body},{runValidators:true,new:true})
    .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
},
addReaction(req, res){
    Thought.findOneAndUpdate({_id:req.params.userId},{$addToSet:{reaction:req.params.reactionBody}},{runValidators:true,new:true})
    .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res){
    Thought.findOneAndUpdate({_id:req.params.userId},{$pull:{reaction:req.params.reactionBody}},{new:true})
    .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  }
}

  
  