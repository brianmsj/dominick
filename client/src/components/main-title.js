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
          <p className='main-title'>IM DOMINICK MCMINN</p>
          <p className='main-title'>WELCOME TO MY LEGO SITE</p>
        </div>
       </div>
      )
    }
}

export default Title;
