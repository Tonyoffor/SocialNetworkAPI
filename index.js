const express = require('express');
const db = require('./config/connection');
const routes = require('./Routes');
// Require model
const { User } = require('./model');

//This is the port the system is meant to use to creat the connection
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//This is the connection to the database 
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });