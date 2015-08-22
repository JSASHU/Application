'use strict';
var mysqlData = require('../modules/mysql-data');

exports.fetchProdByCat = function(req, res){
  function callback(result){
    var context = {
      data: result
    };
    res.render('productByCategory', context);
  }
  var query = 'SELECT * from product where category_id="' + req.query.categoryRadio + '"';
  mysqlData.findProdByCat(query, callback);
};

exports.fetchAllProduct = function(req, res){
  function callback(result){
    var context = {
      data: result
	};
    res.render('product', context);
  }
  var query = 'SELECT * from product';
  mysqlData.findAllProduct(query, callback);
};

exports.insertProduct = function(req, res){
  function callback(result){
    var context = {
      data: result
	};
    res.render('addProduct', context);
  }
  var query = 'INSERT INTO product (product_name,product_manufac,category_Id) VALUES ("' + req.body.addProductName + '","' + req.body.addProductManuf + '","' + req.body.categoryRadio + '")';
  mysqlData.insertProduct(query, callback);
};


