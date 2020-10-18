const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const AuthRoute = require('./routes/Auth');
const CaloriesRoute = require('./routes/Calories');
const WaterRoute = require('./routes/Water');
const SleepRoute = require('./routes/Sleep');

app.use(bodyParser.json());

app.use((req, res, next) => {//cors policy
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, Authorization, id');
    next();
  });

app.use('/auth',AuthRoute);

app.use('/calories',CaloriesRoute);

app.use('/water',WaterRoute);

app.use('/sleep',SleepRoute); 

app.use((error,req,res,next)=>{//error handling
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message
  });
});


mongoose.connect("mongodb+srv://hack:heroes@cluster0.vuy3w.mongodb.net/app?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology:true}) // Tutaj można wrzucić do zmiennej środowiskowej, lecz na potrzeby konkursu zostawiam to :D
.then(result=>{
    console.log('Succesfully connected with database');
    app.listen(process.env.PORT||3000);
})