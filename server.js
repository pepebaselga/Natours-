const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: '/Users/pepebaselga/dev-practice/4-natours/config.env' });

const DB = process.env.DATA_BASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB Connection Succesful');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on ${port}...`);
});
