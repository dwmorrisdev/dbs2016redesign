var React = require('react');


var Contact = (props) => {
    return (
        <div className="row">
          <h1 className="text-center page-title">Hire Me</h1>
          <p className="text-center">Interested in hiring me for your next project? Drop me a message below</p>
          <div className="columns medium-6 text-center">
            <p>contact form component</p>
          </div>
          <div className="columns medium-6 text-center">
            <h3>Contact Me:</h3>
            <p>Email: <a href="mailto:dwmorris.biz@outlook.com">Dustin Morris</a><br/>

            </p>
          </div>
        </div>
    );
};

module.exports = Contact;
