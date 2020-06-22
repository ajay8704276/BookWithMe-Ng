const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const  rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DATABASE, {
  useNewUrlParser: true
}, function (err, db) {

  if (err) {
    console.log(`error : ${err.message}`)
  } else {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  }
});

const app = express();


app.use('rentals',rentalRoutes);

const PORT = process.env.PORT || 3001;

/*app.get('/rentals', function (request, response) {
  response.json({
    'success': true
  })
})*/

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
})
