var React = require('react');

// refactoring to use stateless component because only render method is used
var About = (props) => {
  return (
      <div>
          <h3>About</h3>
          <p>This is a little information about this tutorial app.</p>
      </div>
    );
};

module.exports = About;
