const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/userDB';

//The code below makes the mongodb connection
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//This exports the code
module.exports = connection;
