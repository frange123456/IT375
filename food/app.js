const express = require('express');

const restaurantsRouter = require('./routes/restaurants');

const app = express();

const port = process.env.PORT || 8000;

//MIddleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api/restaurants',restaurantsRouter);

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to requrest on port ${port}`);
});

