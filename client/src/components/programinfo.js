import React from 'react';
import {Link} from 'react-router-dom';
import LegoLand from './dominick_lego.jpg'


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
            <a href='http://www.legoland.com'><button className='btn btn-primary'>Learn more about Legoland here!</button></a>
          </div>
        </div>
      )
    }
}

export default ProgramInfo;
