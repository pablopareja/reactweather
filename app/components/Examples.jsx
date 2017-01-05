var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Heare are a few locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Granada'>Granada, ES</Link>
        </li>
        <li>
          <Link to='/?location=Malaga'>Malaga, ES</Link>
        </li>
      </ol>
    </div>

  );
};

module.exports = Examples;
