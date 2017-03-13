var React = require('react');


var Portfolio = (props) => {
    return (
        <div className="port">
          <h1 className="text-center page-title">Portfolio</h1>
          <p className="text-center"> Here is some of the work that I have done.</p>
          <div className="row">
          		<div className="text-center small-12 large-6 columns">
          		<div>
          			<h3>React ToDo</h3>
          			<img src="https://s19.postimg.org/yxi2e8uab/todo.png" alt="To Do App Photo" /><br />
          			<span>
          				<a href="https://github.com/dwmorrisdev/ReactTodo">Source Code </a>:
          				<a href="http://calm-bastion-64612.herokuapp.com/"> Live Link</a>
          				<p>This is a React based to do list.</p>
          			</span>
          		</div>
          		<div>
          			<h3>React Weather</h3>
          			<img src="https://s19.postimg.org/fedh4vvir/React_Weather.png" alt="React Weather App Photo" /><br />
          			<span>
          				<a href="https://github.com/dwmorrisdev/ReactWeather">Source Code </a>:
          				<a href="https://arcane-stream-15411.herokuapp.com/"> Live Link</a>
          				<p>This app accepts a given location and returns local weather information. It demonstrates using the Open Weather API.</p>
          			</span>
          		</div>
          		<div>
          			<h3>React Timer</h3>
          			<img src="https://s19.postimg.org/jpl684cpf/React_Timer.png" alt="Timer App Photo" /><br />
          			<span>
          				<a href="https://github.com/dwmorrisdev/ReactTimer">Source Code </a>:
          				<a href="http://react-timer-and-countdown.herokuapp.com/"> Live Link</a>
          				<p>React based app that provides a timer and countdown features.</p>
          			</span>
          		</div>
          		<div>
          			<h3>designbysparticus Original</h3>
          			<img src="https://s19.postimg.org/c4z1yf7f7/dbs.png" alt="Design By Sparticus Website Photo" /><br />
          			<span>
          				<a href="#">Source Code </a>:
          				<a href="#"> Live Link</a>
          				<p>The last incarnation of this website. Not built with react or any other framework.  </p>
          			</span>
          		</div>
          		
          </div>

          <div className="text-center small-12 large-6 columns">      		
	         	<div>
          			<h3>Vicari Grill</h3>
          			<img src="https://s19.postimg.org/3rtd3r87n/vicari.png" alt="Vicari Grill Website Photo" /><br />
          			<span>
          				<a href="#">Source Code </a>:
          				<a href="http://www.vicarigrill.com"> Live Link</a>
          				<p>This is the website for a restaurant in Corinth, MS. If you're in the area give them a try. I'm currently rebuilding this site for 2017 with React.</p>
          			</span>
          		</div>
	         	<div>
          			<h3>Random Quote Generator</h3>
          			<img className="slim" src="https://s19.postimg.org/prssym15f/Rand_Quote_Gen.png" alt="Random Quote Generator App Photo" /><br />
          			<span>
          				<a href="http://codepen.io/thedadsparticus/pen/ZLVQQx">Source Code </a>:
          				<a href="http://codepen.io/thedadsparticus/full/ZLVQQx/"> Live Link</a>
          				<p>This was a FCC Project, and although displayed here on Codepen. I am developing a Node/React based version of this app.</p>
          			</span>
          		</div>
          		<div>
          			<h3>Ruby Bookstore</h3>
          			<img className="slim" src="https://s19.postimg.org/aonjga4ib/bookstore.png" alt="Ruby Bookstore App Photo" /><br />
          			<span>
          				<a href="#">Source Code</a>
          				<p>Basic Inventory/E-commerce based app. Built in Ruby on Rails.</p>
          			</span>
          		</div>
          		<div>
          			<h3>Node Blog</h3>
          			<img src="https://s19.postimg.org/lqsmepykz/node_Blog.png" alt="Node Blog App Photo" /><br />
          			<span>
          				<a href="#">Source Code</a>
          				<p>Node based simple blog app, with database functionality, CRUD. This app uses Express over React.</p>
          			</span>
          		</div>
          </div>
        </div> 

        </div>
    );
};

module.exports = Portfolio;
