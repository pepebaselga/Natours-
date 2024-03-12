const express = require('express');

const tourController = require('./../controllers/tourController');

//ROUTE HANDLERS

//ROUTERS
const router = express.Router();

// router.param('id', tourController.checkID);
//create a checkBody middleware
//check f body contains the name and price property
//if not, send back 400 (bad request)
//Add it to the post handler stack

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
module.exports = router;
