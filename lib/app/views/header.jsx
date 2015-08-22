'use strict';

var React = require('react');

var style = {
  color: 'red',
  backgroundColor: 'black',
  height: 100,
  width: '550',
  textAlign: 'center'
};

/**
 * Header component
 */
var Header = React.createClass({
  render: function() {
    return (
        <div className="header_wrap" style={style}>
            <div>
                <h1>My Shop</h1>
            </div>
          </div>
        );
  }
});

module.exports = Header;
