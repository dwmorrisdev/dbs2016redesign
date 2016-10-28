var React = require('react');


var Main = (props) => {
  return (
    <div >
      <div>
        <div >
          {props.children}
          <h1>main.jsx is working </h1>
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
