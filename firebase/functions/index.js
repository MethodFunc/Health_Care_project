const functions = require('firebase-functions');
const admin = require('firebase-admin');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', require('./routes/board'));

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

// admin.initializeApp(functions.config().firebase);
//
// let db = admin.firestore();
// // 현재 날짜 가져오기 및 데이터베이스 초기화
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
// if(dd<10) {
//     dd='0'+dd
// }
// if(mm<10) {
//     mm='0'+mm
// }
// today = String(yyyy)+ String(mm)+ String(dd);
//
// let test = db.collection('hca').doc(today);
//
//

const api1 = functions.https.onRequest(app)

module.exports = {
  api1
}
