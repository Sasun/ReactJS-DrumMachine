'use strict';

var fs        = require('fs'),
    path      = require('path'),
    basename  = path.basename(module.filename),
    env       = process.env.NODE_ENV,
    config    = require(__dirname + '/../config/config.json')[env],
    db        = {},
    mongoose  = require('mongoose');

//connect to mongodb -------------------------------------------------
mongoose.connect('mongodb://localhost/'+config.database);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  });

module.exports = db;