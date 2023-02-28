const {User} = require('../model');

module.exports = {
  //tested
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
//Tells the system to look for a single users information and retrieve it for the user
//tested
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
  //tested
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({_id:req.params.userId})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //tested
  updateUser(req, res){
    User.findOneAndUpdate({_id:req.params.userId},{$set:req.body},{runValidators:true,new:true})
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res){
    User.findOneAndUpdate({_id:req.params.userId},{$addToSet:{friends:req.params.friendId}},{runValidators:true,new:true})
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //tested
  deleteFriend(req, res){
    User.findOneAndUpdate({_id:req.params.userId},{$pull:{friends:req.params.friendId}},{new:true})
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  }
};






