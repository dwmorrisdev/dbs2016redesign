var React = require('react');

var ContactForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    alert('form submitted. not yet wired up.');

  },
  render: function () {
    return (
        <div className="row text-center">
          <div id="heading"></div>
          <form onSubmit={this.onFormSubmit}>
            <div className="medium-6 columns">
              <input type="text" name="name" placeholder="Enter Name" required/>
            </div>
            <div className="medium-6 columns">
              <input className="medium-6 columns" type="email" name="email" placeholder="Enter Email" required/>
            </div>
            <textarea className="textarea" type="textarea" name="message" rows="6" placeholder="Enter message here."equired/>
            <button className="button expanded hollow">Submit</button>

          </form>
        </div>
    );
  }
});

module.exports = ContactForm;
