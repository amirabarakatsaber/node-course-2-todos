//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    
    //Find out and update
   /* db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('59c0a9a6ed417565fc76ca74')
    }, {
        $set: {
            completed : true
        }
    }, {
        returnOriginal : false
    }).then((result) =>{
        console.log(result);
    });
    */
    db.collection('Users').findOneAndUpdate({
        _id : 123
    }, {
        $set : {
            name : "Barakat"
        },
        $inc : {
            age : 4
        }
    }, {
        retuenOriginal : false
    }).then((result) => {
        console.log(result);
    });
    
  //db.close();
});
