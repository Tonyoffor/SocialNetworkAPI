const express = require('express');
const db = require('./config/connection');
// Require model
const { User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/new-user/:user', (req, res) => {
    const newUser = new User({ name: req.params.genre });
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