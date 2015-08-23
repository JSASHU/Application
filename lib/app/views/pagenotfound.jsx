'use strict';

var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

/**
 * Error Page component
 */
var ErrorPage = React.createClass({
    render: function() {
      return (
	<div className = "error-page">
	<Header />
      <div><a href='/'>Back</a></div><br></br>
      <h1>404 ERROR: Page Not Found</h1>
      <h3 >Please contact your administrator.</h3>
      <h3 >Check the Path or go back to the previous page</h3>
	<Footer />
	</div>
        );
    }
});

module.exports = ErrorPage;


