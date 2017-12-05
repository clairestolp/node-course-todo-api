//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').find({
//   _id: new ObjectID('5a20b41eb6ea73eda9652c7c')
// }).toArray().then((docs) => {
//   console.log('Todos:');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
//   console.log('Unable to fetch todos', err)
// });

// db.collection('Todos').find().count().then((docs) => {
//   console.log('Todos:');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
//   console.log('Unable to fetch todos', err)
// });

db.collection('Users').find({name: 'Ashley'}).toArray().then((docs) => {
  console.log('Found user:');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to find user');
});
  //db.close();
});
