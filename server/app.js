const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const monk = require('monk')

const url = 'localhost:27017/exampleDB'; // Connection URL
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const db = monk(url);
// db.auth("uedatabase","nDK4om3z7gw0")

db.then(() => {
  console.log('เชื่อมฐานข้อมูล mongoDB สำเร็จ')
})

const users = db.get('document');



app.get('/',(req,res,next)=>{
    // res.send('API');
    users.find({}).then((docs) => {
        // only the name field will be selected
        console.log(docs);
        res.json(docs)
      })
});

app.get('/add',(req,res,next)=>{
    
const collection = db.get('document')

collection.insert([{product: 1}, {product: 2}, {product: 3}])
  .then((docs) => {
    // docs contains the documents inserted with added **_id** fields
    // Inserted 3 documents into the document collection
    console.log(docs);
    res.send('success');
  }).catch((err) => {
    // An error happened while inserting
    console.log(err);
  }).then(() => db.close())

});


const port = '4000';
app.listen(port, () => {
    console.log('server Is  Runing port ' + port);
})