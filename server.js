//require dependencies

const express = require('express');
const fs = require('fs')
const path = require('path')

//require routes
const apiRoutes = require( './routes/apiroutes')
const htmlRoutes = require('./routes/htmlRoutes')

//initialize express app
const app = express();
const PORT = process.env.PORT || 3001;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//set up Listener PORT
app.listen(PORT, function(){
  console.log ('App listening on port:' + PORT);
}
);










// Listener
// ===========================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
  