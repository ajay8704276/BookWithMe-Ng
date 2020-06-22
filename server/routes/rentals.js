const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function (request, response) {
  Rental.find({}, function (error, rentalData) {
    response.json(rentalData);
  });
});


router.get('/:id', function (request, response) {
  const rentalId = request.params.id;
  Rental.findById(rentalId, function (error, rentalData) {
    if (error) {
      response.status(422).send({
        error: [{
          title: "Rental Error",
          detail: "Could Not find rental"
        }]
      });
    }
    response.json(rentalData);
  });
});

module.exports = router;
