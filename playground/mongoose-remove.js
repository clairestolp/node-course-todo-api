const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

//Todo.findByIdAndRemove()



Todo.findByIdAndRemove('5a3873e721d1aef8dd80fcb2').then((todo) => {
  console.log(todo);
});
