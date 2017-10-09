const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');

    // delete many
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
        console.log(result);
    });
    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // });


    // find one and delete ObjectId("59da29b679524b5d6dbc5744"),
    // db.collection('Users').findOneAndDelete({_id: ObjectID("59da29b679524b5d6dbc5744")}).then(result => {
    //     console.log(result);
    // });
    //db.close();
});