require('dotenv').config();
const mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var Costume = require("./models/costume");
var resourceRouter = require('./routes/resource');
var costumesRouter = require('./routes/costumes');

const connectionString = process.env.MONGO_CON;

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async function () {
  console.log("Connection to DB succeeded");
  let reseed = false;
  if (reseed) {
    await recreateDB();
  }
});

async function recreateDB() {
  await Costume.deleteMany();

  let instance1 = new Costume({
    costume_type: "ghost",
    size: "large",
    cost: 15.4
  });

  await instance1.save();

  console.log("First object saved");
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/grid', gridRouter);
app.use('/select', pickRouter);
app.use('/resource', resourceRouter);
app.use('/costumes', costumesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
