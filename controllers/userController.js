const User = require('../model/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
//Tells the system to look for a single users information and retrieve it for the user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};

app.post('/:userId', (req, res) => {
  const newUser = new User({ name: req.params.user });
  newUser.save();
  if (newUser) {
    res.status(200).json(newUser);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});



// Finds first document that matches and deletes
app.delete('/find-one-delete/:user', (req, res) => {
  Genre.findOneAndDelete({ name: req.params.user }, (err, result) => {
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
  Genre.findOneAndUpdate({name:'username'}, {name: req.params.user} ),(err,result)=>{
    if(result){
      res.status(200).json(result);
      console.log(`Update: ${result}`);
    }
  }
});

