var React = require('react');
var {Link} = require('react-router');

// refactoring to use stateless component because only render method is used
var About = (props) => {
  return (
      <div>
          <h1 className="text-center">About</h1>
          <p>
            This is a little information about this tutorial app.
          </p>
          <p>
            Here are some of the tools that I used.
            <ul>
              <li>
                <a href="https://facebook.github.io/react">React</a> -
                  This was the Javascript framework used.
              </li>
              <li>
                <Link to="http://openweather.org">openWeatherMap</Link> -
                  I used OpenWeatherMap to search for weather data by city name.
              </li>
            </ul>
          </p>
      </div>
    );
};

module.exports = About;
