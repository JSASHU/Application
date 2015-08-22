'use strict';

var mysqlConnector = require('./mysql-connector');

var userConnector;

mysqlConnector.connect(function(connection) {
  userConnector = new mysqlConnector.MysqlConnector(connection);
});

/*------------- CATEGORIES ------------------*/
var product = {

  findAllCategory: function(query, resultCallback) {
    console.log('Retrieving All Category');
    userConnector.findAllCategory(query, resultCallback);
  },

  findProdByCat: function(query, resultCallback) {
    console.log('Retrieving All Product By Category');
    userConnector.findProdByCat(query, resultCallback);
  },

  findAllProduct: function(query, resultCallback) {
    console.log('Retrieving All Product By Category');
    userConnector.findAllProduct(query, resultCallback);
  },

  insertProduct: function(query, resultCallback) {
    console.log('Inserting New Product ');
    userConnector.insertProduct(query, resultCallback);
  }

};

module.exports = product;
