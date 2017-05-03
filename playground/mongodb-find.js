//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to Mongo Db server');
    }
    console.log('connected to MongoDb server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5907d9d59f074c06847a94bd')
    //   }).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //   console.log('unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count)=>{
      console.log('Todos', count);
    },(err) => {
      console.log('unable to fetch todos', err);
    });

  //  db.close();
});
