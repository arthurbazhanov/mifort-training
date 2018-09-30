'use strict';

let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/userCollectionDB';
let users = [{   "name": 'Hui',   "age": 25 }, { "name": 'Hui1', "age": 24 }, {   "name": 'Hui2',   "age": 23 }, {   "name": 'Hui3',   "age": 21 },];

MongoClient.connect(url)
  .then(db => {
    let collection = db.collection("use");
    collection.insertMany(users)
      .then(results => {
        collection.findOneAndUpdate(
          {age: 23},
          { $set:{age: 32}},
          {
            returnOriginal: false,
          },
          (err,result) => {
            console.log(result);
              db.close()
          }
        )
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err));