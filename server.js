console.log("Dejanlover69");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

  const MongoClient = require('mongodb').MongoClient;



  MongoClient.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true })
    .then(client => {
      console.log("connection work yes")
       const db = client.db('Databas-namn')
         const quotesCollection = db.collection('collection-namn')




    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(3000, function() {
      console.log('listening on 3000')
    });

    app.get('/', (req, res) => {
     res.sendFile('/Users/filip.hallgren1/Desktop/Nodesheet/index.html');
      db.collection('collection-namn').find().toArray()
         .then(results => {
          console.log(results)
           })
            .catch(error => console.error(error))
    
     //  const cursor = db.collection('collection-namn').find()
    //   console.log(cursor);
     });
 

     app.post('/quotes', (req, res) => {
       console.log(req.body)
        res.redirect('/')
          quotesCollection.insertOne(req.body)
           .then(result => {
            console.log(result)
            res.sendFile(__dirname, "index.html");
       })
             .catch(error => console.error(error))
   })

   app.post('/update', (req, res) => {
    console.log(req.body)
     res.redirect('/')
       quotesCollection.updateOne({"name": req.body.name}, {$set: { quote: req.body.quote}})
        .then(result => {
         console.log(result)
         res.sendFile(__dirname, "index.html");
    })
          .catch(error => console.error(error))
})
app.post('/delete', (req, res) => {
  console.log(req.body)
   res.redirect('/')
     quotesCollection.deleteOne({"name": req.body.name})
      .then(result => {
       console.log(result)
       res.sendFile(__dirname, "index.html");
  })
        .catch(error => console.error(error))
})
      });

    


  


  
  







    