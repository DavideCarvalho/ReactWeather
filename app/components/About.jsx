var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center">About</h3>
      <p>This is a weather application build on React. I have built this for The Complete React Web App Developer Course</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was a JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
