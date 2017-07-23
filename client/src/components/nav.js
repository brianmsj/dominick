import React from 'react';
import Whistle from './whistle.svg'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='nav-banner'>
          <div className='main-logo'>
            <div className='main-logo-img'>
            <img src={Whistle} />
            </div>
            <div className='main-logo-text-container'>
            <h3 className='main-logo-text'>Coding</h3>
            <h3 className='main-logo-text'>Bootcamp</h3>
            <h2 className='main-logo-text'>Coach</h2>
          </div>
          </div>
          <div className='nav-head-bar'>
            <li className='nav-link'>ABOUT</li>
            <li className='nav-link'>PROGRAM</li>
            <li className='nav-link'>ARTICLES</li>
            <li className='nav-link'>RESOURCES</li>
          </div>
        </div>
      )
    }
}

export default Nav;
