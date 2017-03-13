var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');
var CalltoAction = require('CalltoAction');

var Main = (props) => {
    return (
        <div >
          <Nav/>
            <div>
                <CalltoAction/>
                <div>
                    {props.children}
                </div>
            </div>
          <Footer/>
        </div>
    );
};

module.exports = Main;
