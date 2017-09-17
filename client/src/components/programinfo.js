import React from 'react';
import {Link} from 'react-router-dom';
import LegoLand from './dominick_lego.jpg'
import LexLuthor from './Lexlb2.jpg'
import Batman from './batman.jpg'
import SpiderMan from './spider_man.jpg'
import LexArmor from './power_armor_lex.jpg'
import WaterFireGuy from './waterguyvsfireguy.jpg'
import LegendaryLego from './legendarylego.jpg'


class ProgramInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='program-info row'>
          <div className='slogan-info col-11'>
            <p className='slogan-guarantee'>This is me at LegoLand with a full size hulk made of legos!</p>
            <div className='main-image-dom-container'>
            <img className='main-image-dom' src={LegoLand}/>
            </div>
            <a href='http://www.legoland.com'><button className='btn btn-primary main-legoland-link'>Learn more about Legoland here!</button></a>
          </div>
          <div className='slogan-info col-11'>
          <p className='slogan-guarantee'>My favorite Villain Lego is Lex Luthor</p>
          <div className='main-image-dom-container'>
            <img className='main-image-dom' src={LexLuthor}/>
          </div>
          <div className='slogan-info col-11'>
          <p className='slogan-guarantee'>This is my fire guy water guy lego</p>
          <div className='main-image-dom-container'>
            <img className='main-image-dom' src={WaterFireGuy}/>
          </div>
          </div>
          <div className='slogan-info col-11'>
          <p className='slogan-guarantee'>I built this legendary lego!!</p>
          <div className='main-image-dom-container'>
            <img className='main-image-dom' src={LegendaryLego}/>
          </div>
          </div>
          <div className='other-fav-container'>
            <div className='aux-pic'>
            <p className='aux-pic-text'>I love Batman</p>
            <img className='aux-pic-image' src={Batman}/>
            </div>
            <div className='aux-pic'>
            <p className='aux-pic-text'>Spider man is awesome!</p>
            <img className='aux-pic-image' src={SpiderMan}/>
            </div>
            <div className='aux-pic'>
            <p className='aux-pic-text'>Lex Armor is so cool!</p>
            <img className='aux-pic-image' src={LexArmor} />
            </div>
          </div>
          </div>
        </div>
      )
    }
}

export default ProgramInfo;
