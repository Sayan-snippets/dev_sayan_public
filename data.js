const mongoose = require('mongoose');

const getPersonalData = async (collectionName) => {

  try {
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
   
    const documents = await collection.findOne({});
    console.log("Data Fetched From Collection : ",collectionName , "........")

    return documents;
  } catch (err) {
    console.error('Error fetching personal data:', err);
    throw err;
  }
};


const getExperienceData = async (collectionName) => {

  try {
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
    
    const documents = await collection.find({}).toArray();
    console.log("Data Fetched From Collection : ",collectionName , "........")

    return documents;
  } catch (err) {
    console.error('Error fetching personal data:', err);
    throw err;
  }
};

const getEducationData = async (collectionName) => {

  try {
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
    
    const documents = await collection.find({}).toArray();
    console.log("Data Fetched From Collection : ",collectionName , "........")

    return documents;
  } catch (err) {
    console.error('Error fetching personal data:', err);
    throw err;
  }
};


const getTechStackData = async (collectionName) => {

  try {
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
    
    const documents = await collection.find({}).toArray();
    console.log("Data Fetched From Collection : ",collectionName , "........")

    return documents;
  } catch (err) {
    console.error('Error fetching personal data:', err);
    throw err;
  }
};


const getProjectImagesData = async (collectionName) => {

  try {
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
    
    const documents = await collection.find({}).toArray();
    console.log("Data Fetched From Collection : ",collectionName , "........")

    return documents;
  } catch (err) {
    console.error('Error fetching personal data:', err);
    throw err;
  }
};

module.exports = { getPersonalData , getExperienceData , getEducationData  , getTechStackData , getProjectImagesData };
