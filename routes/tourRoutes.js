const express = require('express');
const tourController = require('./../controllers/tourController');

// Tours Routes
const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

//app.use('/api/v1/tours', router);

module.exports = router;
