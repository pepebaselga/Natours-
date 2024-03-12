// const fs = require('fs');
const Tour = require('./../models/toursModel');

//reduces code duplication

//app.use for middle wear would not work for this route becuase the cycle ends after one of the function sends
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    resultedAt: req.requestTime
    // results: tours.length,
    // data: {
    //   tours: tours
    // }
  });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1; //nice string if string number is multiplied makes it an int
  // const tour = tours.find(el => el.id === id);
  // // if (id > tours.length) {
  // // if (tour === undefined) {
  // res.status(200).json({
  //   status: 'sucess',
  //   data: {
  //     tours: tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      // tours: tours
    }
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  console.log(id);
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  console.log(id);
  res.status(204).json({
    status: 'success',
    data: null
  });
};
