import React from 'react';
import LexArmor3 from './lexarmor3.jpeg';
import Antman from './antman.jpg'
import Chewy from './chewy.jpeg'
import DeadPool from './deadpool.jpg'
import Flash from './flash.jpg';
import Storm from './storm.jpg';
import Superhero from './superhero.jpg';

class Program extends React.Component {
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
              <p className='main-title'>MORE COOL LEGO PICTURES</p>
            </div>
           </div>
            <div className='program-info row'>
              <div className='slogan-info col-11'>
                <p className='slogan-guarantee'>This page is for more pictures of legos. Leave me some comments and let me know what Lego Pictures you want to see!</p>
                <div className='main-image-dom-container about'>
                <img className='main-image-dom' src={LexArmor3}/>
                </div>
              </div>
             <div className='slogan-info col-11'>
             <p className='slogan-guarantee'>And now some more lego pictures !!</p>
             </div>
             <div className='other-fav-container'>
               <div className='aux-pic'>
               <p className='aux-pic-text'>ChewBACCA!</p>
               <img className='aux-pic-image' src={Chewy}/>
               </div>
               <div className='aux-pic'>
               <p className='aux-pic-text'>Deadpool legos</p>
               <img className='aux-pic-image' src={DeadPool}/>
               </div>
               <div className='aux-pic'>
               <p className='aux-pic-text'>Flash!</p>
               <img className='aux-pic-image' src={Flash} />
               </div>
               <div className='aux-pic'>
               <p className='aux-pic-text'>Star Wars Storm Trooper meeting</p>
               <img className='aux-pic-image' src={Storm}/>
               </div>
               <div className='aux-pic'>
               <p className='aux-pic-text'>This looks like a cool lego set</p>
               <img className='aux-pic-image' src={Superhero} />
               </div>
               <div className='aux-pic'>
               <p className='aux-pic-text'>AntMan!</p>
               <img className='aux-pic-image' src={Antman} />
               </div>
             </div>

            </div>
            </div>
      )
    }
}

export default Program;
