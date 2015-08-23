'use strict';

var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

/**
 * Product Page component
 */
var Product = React.createClass({
    render: function() {

      return (
      <div className = "main-wrapper">
        <Header />
          <div className = "form-container col-sm-8">
            <form action = "" method="post" className = "form-horizontal" id = "login-details">
                <div id="main-container">
                  <div><a href='/'>Back</a></div><br></br>
                  <div className="result">
					<h4>Product Is Added Successfully</h4>
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


