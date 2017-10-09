const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');

    db.collection('Users').find({
        name: 'Kostya',
    }).toArray().then(user => {
        console.log('user', user)
    }, err => {
        console.log('error', err);
    });

    //db.close();
});