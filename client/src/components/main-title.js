import React from 'react';


class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='main-title-container row'>
         <div className='main-title-box'>
          <p className='main-title'>ATTENDED A CODING BOOTCAMP?</p>
          <p className='main-title'>CANT FIND A JOB?</p>
        </div>
        </div>
      )
    }
}

export default Title;
