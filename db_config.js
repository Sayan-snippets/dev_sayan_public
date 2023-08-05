const mongoose = require('mongoose');
const mongodb = require('mongodb')
const username = 'MyDB';
const password = 'Sayan@6722'; 
const clusterURL = 'cluster0.c9sz7qx.mongodb.net';
const databaseName = 'MyDb'; 

const encodedPassword = encodeURIComponent(password);

const url = `mongodb+srv://${username}:${encodedPassword}@${clusterURL}/${databaseName}?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Function to connect to the database
const connectToDB = async () => {
  try {
    await mongoose.connect(url, connectionParams);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
};

module.exports = { connectToDB };

