//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to Mongo Db server');
    }
    console.log('connected to MongoDb server');


    db.collection('Todos').findOneAndUpdate({
      _id : new ObjectID('590a2469e922919332ff33f0')
    },{
      $set: {
        completed: true
      }
    }, {
      returnOriginal : false
    }).then((result) =>{
      console.log(result);
    });
  //  db.close();
});
