const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.use((req, res, next) => {//cors policy
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept');
    next();
  });

mongoose.connect("mongodb+srv://hack:heroes@cluster0.vuy3w.mongodb.net/app?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology:true})
.then(result=>{
    console.log('Succesfully connected with database');
    app.listen(3000);
})