const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59db09293a43fdf825d58942';
var userId ='59da436f21133fd409bf7d64';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('Todo not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {console.log(e)});

User.findById(userId).then((user) => {
    if (!user) {
        console.log('User not found');
    }
    console.log('User by id', user);
}).catch((e) => {console.log(e)});