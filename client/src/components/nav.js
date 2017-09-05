import React from 'react';
import {Link} from 'react-router-dom'


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='nav-banner'>
          <div className='nav-head-bar'>
            <Link to={'/'}><li className='nav-link'>HOME</li></Link>
            <Link to={'/about'}><li className='nav-link'>ABOUT</li></Link>
            <Link to={'/program'}><li className='nav-link'>LEGO PICTURES</li></Link>
          </div>
        </div>
      )
    }
}

export default Nav;
