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
 * Category Page component
 */
var Category = React.createClass({
    render: function() {
      //console.log("HERE IN category jsx data "+JSON.stringify(this.props.categoryData))
      var data = this.props.categoryData;
      var items = data.map(function(category, index){
        return (
                <tr>
                  <td>{index}</td>
                  <td>{category.category_id}</td>
                  <td>{category.category_name}</td>
                </tr>
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
                  <Header />
                  <div id="main-container">
                  <div><a href='/'>Back</a></div><br></br>
                  <div>All Category</div><br></br>
                  <div className="result">
                    <table style={style}>
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Category ID</th>
                          <th>Category Name</th>
                        </tr>
                      </thead>
                      <tbody>{items}</tbody>
                    </table>
                  </div>
                  </div>
                  <Footer />
                </div>
                </body>
          </html>
        );
    }
});

module.exports = Category;
