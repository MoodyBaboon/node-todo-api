const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59da2b2f79524b5d6dbc578d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59da380179524b5d6dbc5f14')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Tanya'
        }
    }).then(result => {
        console.log(result);
    });

    //db.close();
});