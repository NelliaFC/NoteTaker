const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const app = express();
const PORT = 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);












// Listener
// ===========================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
  