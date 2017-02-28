var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var sessions = require('client-sessions')
require('dotenv').config()


var index = require('./routes/index');
var api = require('./routes/api');
var account = require('./routes/account');
var top = require('./routes/top');
var profile = require('./routes/profile');
var tutorial = require('./routes/tutorial');
var admin = require('./routes/admin');


var app = express();

mongoose.connect(process.env.DB_URL, function(err, res) {
  if(err){
    console.log('ERROR, connection failed')
  }
  else {
    console.log('SUCCESS, connection established')
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessions({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 24*60*60*1000,
  activeDuration: 30*60*1000

}))
app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
});


app.use('/', index);
app.use('/api', api);
app.use('/account', account);
app.use('/top', top);
app.use('/profile', profile);
app.use('/tutorial', tutorial);
app.use('/admin', admin);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
