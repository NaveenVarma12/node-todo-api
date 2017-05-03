//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to Mongo Db server');
    }
    console.log('connected to MongoDb server');

  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    console.log(result);
  })
  //  db.close();
});
