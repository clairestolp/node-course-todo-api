const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a356bf1d2a1a600c4484436';

// if(!ObjectID.isValid(id)) {
//   console.log('Invalid ID');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found.');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

//querry user collection id
//load in user todo mongod
//user.findById
//handle 3 cases. found user, did not find user, any other invalid case (print error)

var userId = '5a2b4eef3053a72f805be78b';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('found user', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log('Invalid user id', e));
