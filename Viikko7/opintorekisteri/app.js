var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const jwt = require('jsonwebtoken');
const opiskelijaRouter = require('./routes/opiskelija');
const opintojaksoRouter = require('./routes/opintojakso');
const arviointiRouter = require('./routes/arviointi');
const loginRouter =  require('./routes/login');
const userRouter = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter); //login is not protected 

app.use(authenticateToken); //all routes below this line are protected
app.use('/opiskelija', opiskelijaRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/arviointi', arviointiRouter);
app.use('/user', userRouter);


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.MY_TOKEN, function(err, user) {  
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    })
  }

module.exports = app;
