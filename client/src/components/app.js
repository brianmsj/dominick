import React from 'react';
import Title from './main-title';
import ProgramInfo from './programinfo';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div>
         <div className='nav-ribbon row'>
         </div>
         <Title />
         <div className='nav-ribbon row'>
         </div>
         <ProgramInfo />
        </div>
      )
    }
}

export default App;
