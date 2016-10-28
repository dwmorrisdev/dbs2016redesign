var React = require('react');

var About = (props) => {
    return (
        <div >
            <h1 className="text-center page-title">Who I am</h1>
            <div className="row">
                <div className="text-center medium-6">
                    <h3>Hi, I'm Dustin</h3>
                    <p>About me and design by sparticus.</p>
                    <span>
                        <h3>Links</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/dwmorrisdev/dbs2016redesign" target="_blank">designbysparticus source on Github</a>
                            </li>
                            <li>
                                <a href="https://facebook.github.io/react/" target="_blank">React</a>
                            </li>
                            <li><a href="https://www.twitter.com/thedeadsparticus" target="_blank">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/dustin-morris-a4773283" target="_blank">LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/deadperspective" target="_blank">Dead Perspective</a></li>
                            <li>Photos by
                                <a href="https://unsplash.com/" target="_blank"> Unsplash</a>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="medium-6">
                    <p>insert image here</p>
                </div>
            </div>
        </div>
    );
};

module.exports = About;
