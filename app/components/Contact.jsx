var React = require('react');
var ContactForm = require('ContactForm');


var Contact = React.createClass({
  render: function () {
    return (
        <div className="row">

          <h1 className="text-center page-title">Hire Me</h1>
          <p className="text-center">Interested in hiring me for your next project? Drop me a message below</p>
          <div className=" text-center medium-5 medium-centered">
            <ContactForm/>

            <hr/>
            <p>Or Contact me directly @<br/><a href="mailto:dwmorris.biz@outlook.com">dwmorris.biz@outlook.com</a></p>
          </div>
        </div>
    )
  }
});

module.exports = Contact;
