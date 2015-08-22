'use strict';

var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

var style = {
    height: 'auto',
    width: '550',
	border: '1px solid blue'
};

/**
 * Product Page component
 */
var Product = React.createClass({
    render: function() {

      //console.log("HERE IN Product jsx data "+JSON.stringify(this.props.data));
      var data = this.props.data;
      var items = data.map(function(product, index){
        return (
                <tr>
                  <td>{index}</td>
                  <td>{product.product_id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.product_manufac}</td>
                  <td>{product.category_id}</td>
                </tr>
        );
      });
      return (
        <div className = "main-wrapper">
          <Header />
          <div className = "form-container col-sm-8">
            <form action = "" method="post" className = "form-horizontal" id = "login-details">
                <div id="main-container">
                  <div><a href='/'>Back</a></div><br></br>
                  <div>All Product</div><br></br>
                  <div className="result">
                    <table style={style}>
                      <thead border="1">
                        <tr>
                          <th>S.No</th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Manufacturer</th>
                          <th>Category</th>
                        </tr>
                      </thead>
                      <tbody>{items}</tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>
			<Footer />
          </div>
        );
    }
});

module.exports = Product;


