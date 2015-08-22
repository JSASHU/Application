'use strict';

var React = require('react');

/**
 * Error Page component
 */
var ErrorPage = React.createClass({
    render: function() {
      return (
	<div className = "error-page">
          <h1>404 ERROR: Page Not Found</h1>
          <h3 >Please contact your administrator.</h3>
          <h3 >Check the Path or go back to the previous page</h3>
	</div>
        );
    }
});

module.exports = ErrorPage;


