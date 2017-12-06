//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch.'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo');
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch.'}).then((results) => {
  //   console.log(results);
  // }, (err) => {
  //   console.log('Unable to delete Todo');
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((results) =>{
  //   console.log(results);
  // }, (err) => {
  //   console.log('Unable to delete Todo');
  // });

  // db.collection('Users').deleteMany({name: 'Richard'}).then((results) => {
  //   console.log(results);
  // }, (err) => {
  //   console.log('Unable to delete user');
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a2344d6b6ea73eda9653b1a')}).then((results) =>{
    console.log(results);
  }, (err) => {
    console.log('Unable to find and delete User');
  });


  //db.close();
});

//look for duplicates and delete many. find one and delete by id.
