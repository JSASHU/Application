'use strict';

var pgConnector = require('./pg-connector');

var userConnector;

pgConnector.connect(function(connection) {
  userConnector = new pgConnector.PGConnector(connection);
});

/*------------- CATEGORIES ------------------*/
var product = {

  findAllCategory: function(query, resultCallback) {
    userConnector.findAllCategory(query, resultCallback);
  },

  findProdByCat: function(query, resultCallback) {
    userConnector.findProdByCat(query, resultCallback);
  },

  findAllProduct: function(query, resultCallback) {
    userConnector.findAllProduct(query, resultCallback);
  },

  insertProduct: function(query, resultCallback) {
    userConnector.insertProduct(query, resultCallback);
  }

};

module.exports = product;
