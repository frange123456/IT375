const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// step 2 using obj express's methods
app.get('/',  (req, res)=> {
  res.send('Home Page');
});
app.get('/overview',  (req, res)=> {
    res.send('OVERVIEW page');
  });
  app.get('/product',  (req, res)=> {
    res.send('PRODUCT page');
  });
  app.get('/api/user',  (req, res)=> {
    const userDaata = {id:15, name: 'Tanawut'}
    res.send(userData);
  });

  // step 3 listen
  app.listen(port,'127.0.0.1',()=>{
      console.log(`Listening on port ${port} `);
  });