var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">design by sparticus</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Portfolio</IndexLink>
            </li>
            <li>
              <Link to="/whoiam" activeClassName="active-link">Who I Am</Link>
            </li>
            <li>
              <Link to="/hireme" activeClassName="active-link">Hire Me</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul clasName="menu">
            <li className="menu-text">Created by
              <a href="http://www.github.com/dwmorrisdev" target="_blank"> Dustin Morris</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
