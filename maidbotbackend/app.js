var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressSession = require('express-session');
var passport = require('passport');



// Catch errors

//var index = require('./routes/index');   // not really needed in this case since we just want user validation
var users = require('./routes/users');



var app = express();

//Enable CORS
app.use(cors({ credentials: true, origin: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('foo'));

app.use(expressSession({
    cookieName: 'session',
    secret: 'foo',
    resave:false,
    duration: 60 * 1000,
    activeDuration: 50 * 1000,
    saveUninitialized:true,
    ephemeral: true
}));


//session middleware

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

//routes

app.use('/users', users);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err);
    // render the error page
    res.status(err.status || 500);
});

module.exports = app;