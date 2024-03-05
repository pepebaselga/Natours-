const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync('starter/dev-data/data/tours-simple.json')
);

//reduces code duplication
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Tour!',
    });
  }
  next();
};

//app.use for middle wear would not work for this route becuase the cycle ends after one of the function sends
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    resultedAt: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1; //nice string if string number is multiplied makes it an int
  const tour = tours.find((el) => el.id == id);
  // if (id > tours.length) {
  // if (tour === undefined) {

  res.status(200).json({
    status: 'sucess',
    data: {
      tours: tour,
    },
  });
};

exports.createTour = (req, res) => {
  // console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `starter/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: tours,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  console.log(id);
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  console.log(id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
