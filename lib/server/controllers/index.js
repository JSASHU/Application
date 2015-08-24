'use strict';
var mysqlData = require('../modules/pg-data');

exports.fetchProdCat = function(req, res){
  function callback(result){
    var context = {
    categoryData: result
    };
    res.render('home', context);
  }
  var query = 'SELECT * from product_category';
  mysqlData.findAllCategory(query, callback);
};

