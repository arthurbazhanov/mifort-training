'use strict';

let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/userCollectionDB';
let persons = require('./persons');


MongoClient.connect(url)
  .then(db => {
    let collection = db.collection("users");

    collection.insertMany(persons)
      .then(result => {
        console.log(result.ops);
        db.close();
      })
      .catch(err => console.log(err));

  })
  .catch(err => console.log(err));




