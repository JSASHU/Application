'use strict';

var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var validateForm = require('../../client/validation/validation');

var style = {
    height: 'auto',
    width: '550'
};

var borderStyle = {
	border: '1px solid blue'
};

/**
 * Home Page component
 */
var HomePage = React.createClass({
  submit: function(e){
    e.preventDefault();
  },
    render: function() {
      var data = this.props.categoryData;
      console.log('HERE DATA HOME ' + data);
      var category = data.map(function(category){
        return (
                <tr><td><input type = "radio" name = 'categoryRadio' id = {category.category_id} value = {category.category_id} />{category.category_name}</td></tr>
        );
      });

      return (
          <html lang="en">
                <head>
                  <meta charSet="utf-8"/>
                  <title>Demo</title>
                </head>
                <body>
                 <div className = "headerItem">
                  <Header /><br></br>
                      <div id="main-container" style={style}>
                        <form action = "/getProductByCat" method="get" >
							<div id="productByCategory" style={borderStyle}>
								<div><b>Product By Category</b></div><br></br>
								<table>
									<tr><th>Select a Category Name</th></tr>
									<tr>{category}</tr>
								</table>
								<input type = "submit" name = "submit" value="Get All Products By Category" />
							</div>
                        </form>
                        <br></br><br></br>

                        <form action = "/getAllProduct" method="get" >
                        <div id="getAllProduct" style={borderStyle}>
							<div><b>All Product</b></div><br></br>
							<div><input type = "submit" name = "submit" value="Get All Product" /></div>
                        </div>
                        </form>
                        <br></br><br></br>

                        <form action = "/getAllCategory" method="get" >
                        <div id="getAllProduct" style={borderStyle}>
                        <div><b>All Category</b></div><br></br>
                        <div><input type = "submit" name = "submit" value="Get All Category" /></div>
                        </div>
                        </form>
                        <br></br><br></br>

                        <form action = "/insertProduct" method="post" onSubmit = {this.submit}>
                        <div id="insertProduct" style={borderStyle}>
                        <div><b>Add Product</b></div>
							<div>
                              <table>
                                <tr>
                                  <td>
                                    Product Name <br></br><input type="text" name = 'addProductName' id="addProductName" value=""/>&nbsp;&nbsp;
                                  </td>
                                  <td>
                                    Manufacture <br></br><input type="text" name = 'addProductManuf' id="addProductManuf" value=""/>&nbsp;&nbsp;
                                  </td>
                                  <td>
                                    <table>
                                      <tr>Select a Category Name</tr>
                                      <tr>{category}</tr>
                                    </table>
                                  </td>
                                 </tr>
                               </table>
                             <input type = "submit" name = "submit" value="Add Product" />
							</div>
                        </div>
                        </form>
                      </div>
                  <Footer />
                </div>
                </body>
</html>
        );
    }
});

module.exports = HomePage;
