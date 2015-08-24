'use strict';
var mysqlData = require('../modules/pg-data');

exports.fetchProdByCat = function(req, res){
  function callback(result){
    var context = {
      data: result
    };
    res.render('productByCategory', context);
  }
  var query = 'SELECT a.product_id, a.product_name, a.product_manufac, b.category_name from product a join product_category b on a.category_Id = b.category_id where a.category_Id = ' + req.query.categoryRadio + '';
  mysqlData.findProdByCat(query, callback);
};

exports.fetchAllProduct = function(req, res){
  function callback(result){
    var context = {
      data: result
	};
    res.render('product', context);
  }
  var query = 'SELECT a.product_id, a.product_name, a.product_manufac, b.category_name from product a join product_category b on a.category_Id = b.category_id';
  mysqlData.findAllProduct(query, callback);
};

exports.insertProduct = function(req, res){
  function callback(result){
    var context = {
      data: result
	};
    res.render('addProduct', context);
  }
  var query = "INSERT INTO product (product_name,product_manufac,category_Id) VALUES ('" + req.body.addProductName + "','" + req.body.addProductManuf + "','" + req.body.categoryRadio + "')";
  mysqlData.insertProduct(query, callback);
};


