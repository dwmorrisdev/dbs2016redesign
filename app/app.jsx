var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Portfolio = require('Portfolio');
var Contact = require('Contact');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="whoiam" component={About}/>
      <Route path="hireme" component={Contact}/>
      <IndexRoute component={Portfolio}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
