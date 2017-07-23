import React from 'react';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div>
          <div className='main-logo'>
            <img src='whistle.png' />
            <h3>Coding</h3>
            <h3>Bootcamp</h3>
            <h2>Coach</h2>
          </div>
          <div className='nav-head-bar'>
            <li className='nav-link'>About</li>
            <li className='nav-link'>Program</li>
            <li className='nav-link'>Articles</li>
            <li className='nav-link'>Resources</li>
          </div>
        </div>
      )
    }
}

export default Nav;
