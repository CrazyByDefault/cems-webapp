/**
 * import modules
 */
// require("@babel/polyfill");
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const bunyanMiddleware = require('bunyan-middleware');
const logger = require('./utils/logger');

/**
 * Import configs
 */
const config = require('./config/app');

/**
 * imports middlewares
 */
const AuthAccessToken = require('./middlewares/authAccessToken');

/**
* importing Route binding modules
*/
const TempRoutes = require('./routes/apis/');

// express setup
const app = express();
const port = 5000;

app.set('port', port);

app.set('views', path.join(__dirname, 'views'));
app.set('case sensitive routing', true);

/**
 * logging all requests via bunyan
 */
if (config.env !== 'testing') {
  app.use(bunyanMiddleware({
    logger: logger.child({
      type: 'access_log'
    })
  }));
}

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.text({ type: 'image/*', limit: '50mb' }));
app.use(bodyParser.text({ type: 'audio/*', limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

/**
 * Setting up cookie parser to be able to access client cookies
 */
app.use(cookieParser());

/**
 * Setting the folder routes
 */
app.use('/app', express.static(path.join(__dirname, 'dist/app')));
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/fonts', express.static(path.join(__dirname, 'dist/fonts')));
app.use('/img', express.static(path.join(__dirname, 'dist/img')));
app.use('/js', express.static(path.join(__dirname, 'dist/js')));
app.use('/styles', express.static(path.join(__dirname, 'dist/styles')));


app.use((req, res, next) => {
  // verify session objects
  // res.cookie("id", config.appKey);
  next();
});

/*
 * Binding Routes
 */
app.use('/api', AuthAccessToken, TempRoutes);

/**
 * @@ TODO
 * Redirecting all unknown routes to root
 */
app.use('/', (req, res, next) => {
  // console.log(req.originalUrl);
  // if (req.originalUrl.includes("/account")) {
  //   res.redirect("/studio");
  // }
  // res.status(404).redirect(`/oops?code=404&error_url=${encodeURIComponent(req.originalUrl)}`);
  res.sendFile('root.html', { root: 'views' });
});


/**
 * catch 404 and forward to error handler
 */  
app.use('/oops', (req, res, next) => {
  // res.status(404).redirect(`/oops?code=404&error_url=${encodeURIComponent(req.originalUrl)}`);
  res.sendFile('oops.html', { root: 'views' });
});

/**
 * @@ TODO
 * Error Handler
 */
app.use((err, req, res, next) => {
  // if (config.env === 'development') {
  //   log.error(err);
  // } else {
  //   log.error(err);
  // }

  res.sendFile('oops.html', { root: 'views' });

  // res.redirect(`/oops?code=${err.status || 500}&error_url=${encodeURIComponent(req.originalUrl)}`);
});

module.exports = app;
