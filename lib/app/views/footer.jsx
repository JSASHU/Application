'use strict';

var React = require('react');

var style = {
  color: 'white',
  backgroundColor: 'black',
  height: 100,
  width: '550',
  textAlign: 'center'
};

/**
 * Footer component
 */
var Footer = React.createClass({
  render: function(){
    return (
        <div className="footer" style={style}>
            <div>
                <h1>Demo Application</h1>
            </div>
        </div>
    );
  }
});

module.exports = Footer;
