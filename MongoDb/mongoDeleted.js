'use strict';

let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/userCollectionDB';

MongoClient.connect(url)
  .then(db => {
    let collection = db.collection("users");
    let find = collection.find();
    find.toArray()
      .then(res => {
        collection.find({name: 'Andrew'}).toArray()
          .then(res => {
            console.log(res);
            collection.deleteMany({age: {$lt: 23}})
              .then(value => {
                console.log(value);
                db.close()
              })
              .catch(err => console.log(err))
          })
          .catch(err => err)
      })
      .catch(err => console.log(err))

  })
  .catch(err => console.log(err));