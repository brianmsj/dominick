import React from 'react';
import Nav from './nav';
import Title from './main-title';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div>
         <Nav />
         <Title />
        </div>
      )
    }
}

export default App;
