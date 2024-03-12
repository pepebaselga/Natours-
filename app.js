const { create } = require('domain');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./starter/routes/tourRoutes.js');
const userRouter = require('./starter/routes/userRoutes.js');

console.log(process.env.NODE_ENV);
const app = express();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}
//1) MIDDLEWARES
app.use(express.json()); //middlewear: function that can modify the incoming request data
app.use(express.static(`starter/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware!'); //this middlware applies to every api call because the route has not been defined
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/vi/users', userRouter);
//4) SERVER

module.exports = app;
