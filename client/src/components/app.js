import React from 'react';
import Title from './main-title';
import ProgramInfo from './programinfo';
import Comments from './comments';


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
         <Comments />
        </div>
      )
    }
}

export default App;
