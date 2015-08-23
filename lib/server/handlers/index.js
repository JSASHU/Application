'use strict';

var IndexController = require('../controllers/index');
var ProductController = require('../controllers/product');
var CategoryController = require('../controllers/category');

exports.index = function(req, res){
  IndexController.fetchProdCat(req, res);
};

exports.getProductByCat = function(req, res){
  ProductController.fetchProdByCat(req, res);
};

exports.getAllProduct = function(req, res){
  ProductController.fetchAllProduct(req, res);
};

exports.insertProduct = function(req, res){
  ProductController.insertProduct(req, res);
};

exports.getAllCategory = function(req, res){
  CategoryController.fetchAllCategory(req, res);
};

exports.pagenotfound = function(req, res){
  res.render('pagenotfound');
};
