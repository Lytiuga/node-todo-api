const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false,
//
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err)
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });
//     client.close();
// })
db.collection('Users').insertOne({
    user: 'Barabacca Son',
    location: 'Newerland',

}, (err, result) => {
    if (err) {
        return console.log('Unable to insert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
});
client.close();
})
