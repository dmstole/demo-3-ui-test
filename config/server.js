module.exports = function () {

   const express = require('express');
   const cookieParser = require('cookie-parser');
   const bodyParser = require('body-parser');

   const app = express();

   const config = require('./config');
   app.config = config;

   const datasource = require('./datasource');
   app.datasource = datasource(app);
   
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   app.use(cookieParser());

   app.use(express.static("./app/public"));
   app.set('view engine', 'ejs');
   app.set('views', './app/views');
   app.engine('ejs', require('ejs-locals'));

   require('../app/routes')(app);

   return app;

};