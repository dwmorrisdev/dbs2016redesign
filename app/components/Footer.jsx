var React = require('react');


var Footer = (props) => {
    return (
        <div>
          <footer className="footer">
            <div className="row">
              <div className="small-12 columns">
                <p className="slogan">Created by Dustin Morris</p>
                <p className="links">
                  <a href="https://www.twitter.com/thedeadsparticus" target="_blank">Twitter</a>
                  <a href="#" target="_blank">Facebook</a>
                  <a href="#" target="_blank">Google+</a>
                  <a href="#" target="_blank">Instagram</a>
                </p>
                <p className="copywrite">© Copywrite designbysparticus 2016</p>
              </div>
            </div>
          </footer>

        </div>
    );
};

module.exports = Footer;
