'use strict';
var mysqlData = require('../modules/mysql-data');

exports.fetchAllCategory = function(req, res){
  function callback(result){
    var context = {
    categoryData: result
    };
    res.render('category', context);
  }
  var query = 'SELECT * from product_category';
  mysqlData.findAllCategory(query, callback);
};

