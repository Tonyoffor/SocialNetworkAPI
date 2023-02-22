const Thought = require('../model/Thought');

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
};

app.post('/:thoughtId', (req, res) => {
    const newThought = new Thought({ name: req.params.thought });
    newThought.save();
    if (newThought) {
      res.status(200).json(newThought);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
  
  
  
  // Finds first document that matches and deletes
  app.delete('/find-one-delete/:thought', (req, res) => {
    Thought.findOneAndDelete({ name: req.params.thought }, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  });
  
  // find documents that matches and delete
  app.post('/find-one-update/:user', (req, res) => {
    Thought.findOneAndUpdate({name:'username'}, {name: req.params.thought} ),(err,result)=>{
      if(result){
        res.status(200).json(result);
        console.log(`Update: ${result}`);
      }
    }
  });
  
  