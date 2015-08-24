'use strict';
var pg = require('pg');
var config = require('../../../config');

exports.connect = function(callback) {
  var conString = 'postgres://' + config.pg.user.default + ':' + config.pg.password.default + '@localhost/' + config.pg.dbname.default + '';
  pg.connect(conString, function(err, client) {
    if(!err) {
      console.log('Database is connected ...');
      callback(client);
    }else {
      console.log('Error connecting database ...' + err);
    }
  });
};

var reportSuccess = function(result, resultCallback) {
  if (resultCallback) {
    resultCallback(result);
  }
};

exports.PGConnector = function(connection) {
  this.connection = connection;
};

exports.PGConnector.prototype.findAllCategory = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows.rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};

exports.PGConnector.prototype.findProdByCat = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows.rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};

exports.PGConnector.prototype.findAllProduct = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows.rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};

exports.PGConnector.prototype.insertProduct = function(query, resultCallback) {
  //console.log("QUERY "+query)
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows.rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};
