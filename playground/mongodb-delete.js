//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    
    //deleteMany
    /*
    db.collection('Todos').deleteMany({
        text: 'Eat Lunch'
    }).then((result) => {
        console.log(result);
    });
    */
    // delete One
     /* db.collection('Todos').deleteOne({
        text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    */
    // find and delete
    /*
    db.collection('Todos').findOneAndDelete({completed : false}).then((result) =>{
        console.log(result);
    })
    */
    /*
    db.collection('Users').deleteMany({
        name :'Amira'
    }).then((res) =>{
        console.log(res);
    });
    */
     db.collection('Users').deleteOne({
        _id: new ObjectId("59c088fcd31b7312603780a5")
    }).then((res) =>{
        console.log(JSON.stringify(res, undefined, 2));
    });
    
    
  //db.close();
});
