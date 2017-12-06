//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a274eccb6ea73eda9654ac5')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a1f6182d43ef534e023e7d0')
  }, {
    $set: {
      name: 'Ashley'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  })

  //db.close();
});

//look for duplicates and delete many. find one and delete by id.
