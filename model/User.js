const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
   // Must match a valid email address (look into Mongoose's matching validation)
  },
  thoughts:{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
// Array of _id values referencing the Thought model
  },
  friends:{
    type: Schema.Types.ObjectId,
    ref: 'User'
// Array of _id values referencing the User model (self-reference)
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

const User = mongoose.model('user', userSchema);


module.exports = User;


