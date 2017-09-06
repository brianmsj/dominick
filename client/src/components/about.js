import React from 'react';
import Family from './family.jpg';
import legothree from './download.jpeg';
import Kylo from './kylo.png';
import Darth from './darth.png';
import Yoda from './yoda.jpg';


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
          <div>
          <div className='main-title-container row'>
           <div className='main-title-box'>
            <p className='main-title'>ABOUT ME AND MY FAMILY</p>
          </div>
         </div>
          <div className='program-info row'>
            <div className='slogan-info col-11'>
              <p className='slogan-guarantee'>This is my Family. I love my Mom and Dad and my baby brother Jonathan. My mom and Dad took me to LegoLand last year. It was so much fun.</p>
              <div className='main-image-dom-container about'>
              <img className='main-image-dom' src={Family}/>
              </div>
            </div>
           <div className='slogan-info col-11'>
           <p className='slogan-guarantee'>And now some more lego pictures !!</p>
           </div>
           <div className='main-image-dom-container three'>
           <p className='aux-pic-text'>Superhero legos to the rescue!</p>
           <img className='main-image-dom' src={legothree}/>
           </div>
           <div className='other-fav-container'>
             <div className='aux-pic'>
             <p className='aux-pic-text'>I love star wars. Here is Kylo Ren</p>
             <img className='aux-pic-image' src={Kylo}/>
             </div>
             <div className='aux-pic'>
             <p className='aux-pic-text'>Darth Vader, Awesome!</p>
             <img className='aux-pic-image' src={Darth}/>
             </div>
             <div className='aux-pic'>
             <p className='aux-pic-text'>Yoda is one of my favorites</p>
             <img className='aux-pic-image' src={Yoda} />
             </div>
           </div>

          </div>
          </div>
      )
    }
}

export default About;
