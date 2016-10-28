var React = require('react');

var About = (props) => {
    return (
        <div >
            <h1 className="text-center page-title">Who I am</h1><hr/>
            <div className="row">
                <div className="medium-6 columns text-center">
                    <h3>Hi, I'm Dustin</h3>
                    <p>About me and design by sparticus.</p>
                    <p>Spicy jalapeno bacon ipsum dolor amet pork belly short
                      ribs swine ham hock salami bresaola. Tongue t-bone shoulder
                      tenderloin, doner filet mignon landjaeger cupim kevin
                      andouille cow swine meatloaf. Capicola picanha porchetta
                      bresaola burgdoggen leberkas swine, kielbasa venison.
                      Brisket pancetta landjaeger ham hock sirloin corned beef
                      boudin jowl rump jerky cupim pork chuck flank ham.</p>
                    <div >
                        <h3>Links</h3>
                        <hr/>
                        <ul >
                            <li>
                                <a href="https://github.com/dwmorrisdev/dbs2016redesign" target="_blank">designbysparticus source on Github</a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/dustin-morris-a4773283" target="_blank">LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/deadperspective" target="_blank">Dead Perspective</a></li>
                            <li>Photos by
                                <a href="https://unsplash.com/" target="_blank"> Unsplash</a>
                            </li>
                            <li> Built with
                                <a href="https://facebook.github.io/react/" target="_blank"> React</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="medium-6 columns text-center">
                    <img src="#" alt="Photo of Dustin Morris"/>
                    <p>insert image here</p>
                </div>
            </div>
        </div>
    );
};

module.exports = About;
