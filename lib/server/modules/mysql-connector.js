'use strict';
var mysql      = require('mysql');
var config = require('../../../config');
exports.connect = function(callback) {
  var connection = mysql.createConnection({
  host: config.mysql.host.default,
  user: config.mysql.user.default,
  password: config.mysql.password.default,
  database: config.mysql.dbname.default
});

  connection.connect(function(err){
    if(!err) {
      console.log('Database is connected ...');
    }else {
      console.log('Error connecting database ...' + err);
    }
  });
  callback(connection);
};

var reportSuccess = function(result, resultCallback) {
  if (resultCallback) {
    resultCallback(result);
  }
};

exports.MysqlConnector = function(connection) {
  this.connection = connection;
};

exports.MysqlConnector.prototype.findAllCategory = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};

exports.MysqlConnector.prototype.findProdByCat = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};

exports.MysqlConnector.prototype.findAllProduct = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};

exports.MysqlConnector.prototype.insertProduct = function(query, resultCallback) {
  this.connection.query(query, function(err, rows) {
    if (!err){
      reportSuccess(rows, resultCallback);
    }
    else{
      console.log('Error while performing Query.');
    }
  });
};
